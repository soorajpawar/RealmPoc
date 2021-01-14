import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Pie from 'react-native-pie';
import colors from '../../constant/colors';
import strings from '../../constant/strings';
import styles from './styles';
import Images from '../../images';

class ItemOrder extends Component {
	
	renderPie = (heading, firstPercentage, secoundPercentage,gaugeTextColor) => {
		return(
			<View style={styles.pieView}>
				<Pie
					radius={22}
					innerRadius={19.5}
					sections={[
						{
							percentage: firstPercentage,
							color: colors.white,
						  },
						{
						  percentage: secoundPercentage,
						  color: colors.darkGrey,
						}
					  ]}
					  strokeCap={'butt'}
					  backgroundColor="#00000000"
				/>
				<View
                	style={styles.gauge}
              	>
					<Text
					style={[styles.gaugeText,{color:gaugeTextColor}]}
					>
						{heading}
					</Text>
              </View>
			</View>
		)
	}

	renderText = (heading, style) => {
		return(
			<Text 
				style={style}
				adjustsFontSizeToFit
			>{heading}</Text>
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
					<View style={styles.pieContainer}>
						{this.renderPie(strings.common.step1, 50, 50, colors.white )}
						{this.renderPie(strings.common.step2,100, 100, colors.darkGrey )}
						{this.renderPie(strings.common.step3,100, 100,colors.darkGrey )}
						{this.renderPie(strings.common.step4, 100, 100, colors.darkGrey )}
					</View>
				</View>
				</ImageBackground>	
            </View>
		);
	}
}


export default ItemOrder;
