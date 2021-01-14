import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Pie from 'react-native-pie';
import colors from '../../constant/colors';
import strings from '../../constant/strings';
import styles from './styles';
import Images from '../../images';

class OrderItem extends Component {
	
	renderPie = (heading) => {
		return(
			<View style={styles.pieView}>
				<Pie
					radius={20}
					innerRadius={18}
					sections={[
						{
							percentage: 50,
							color: colors.black2,
						  },
						{
						  percentage: 50,
						  color: colors.gray,
						}
					  ]}
					  strokeCap={'round'}
				/>
				<View
                	style={styles.gauge}
              	>
					<Text
					style={styles.gaugeText}
					>
						{heading}
					</Text>
              </View>
			</View>
		)
	}

	renderText = (heading, style) => {
		return(
			<Text style={style} adjustsFontSizeToFit>{heading}</Text>
		)
	}

	renderImage = () => {
		return(
			<Image 
				source={Images.burger}
				style={styles.imageView}>
			</Image>
		)
	}

	renderButton = () =>{
		return(
			<Text style={styles.button}>{strings.common.buttonName}</Text>
		)
    }
    
    renderDotView = (style) => {
        return(
            <View style={style}>
            </View>
        )
    }


	render() {
		return (
		    <View
                style={styles.container}
            >
                <ImageBackground 
                    source={Images.burger}
					style={ styles.image}
                >
					<View style={styles.subContainer}>
						{this.renderText(strings.common.title, styles.title)}
						{this.renderText(strings.common.name, styles.name)}
						{this.renderButton()}
						<View style={styles.dotContainer}>
							{this.renderDotView(styles.unfillDot)}
							{this.renderDotView(styles.fillDot)}
							{this.renderDotView(styles.fillDot)}
							{this.renderDotView(styles.fillDot)}
						</View>
					</View>
                </ImageBackground>
            </View>
		);
	}
}


export default OrderItem;
