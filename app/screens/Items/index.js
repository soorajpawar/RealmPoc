import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import strings from '../../constant/strings';
import styles from './styles';
import Images from '../../images';
import { getItemList } from './helper';

class Items extends Component {
	


	renderText = (heading, style) => {
		return(
			<Text style={style}>{heading}</Text>
		)
	}

	renderImage = () => {
		return(
			<Image 
				source={Images.burger}
				style={styles.image}>
			</Image>
		)
	}

    renderHeadingImage = () => {
		return(
			<Image 
				source={Images.burger}
				style={styles.imageView}>
			</Image>
		)
    }
    
    renderHeadingView = () => {
        return(
            <View style={styles.itemContainer}>
                {this.renderHeadingImage()}
                {this.renderText(strings.common.categoryName, styles.title)}
            </View> 
        )
    }

    renderProduct = ({item}) => {
        return(
            <View style={styles.itemContainer}>
                {this.renderImage()}
                {this.renderText(item.title, styles.title)}
            </View> 
        )
    }

	render() {
        const data= getItemList();
		return (
		    <View
                style={styles.container}
            >
                <View style={styles.headerContainer}>
                    {this.renderText(strings.common.categoryName, styles.title)}
                    <View style={styles.lineView}></View>
                </View>
                <View style={styles.headerItemContainer}>
                    {this.renderHeadingImage()}
                    {this.renderText(strings.common.categoryName, styles.title)}
                </View>
                <FlatList
                    data={getItemList()}
                    renderItem={(item)=>this.renderProduct(item)}
                    numColumns={2}
                    style={styles.flatListContainer}
                />
            </View>
		);
	}
}


export default Items;
