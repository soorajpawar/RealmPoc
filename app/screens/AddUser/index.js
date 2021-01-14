import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Pie from 'react-native-pie';
import colors from '../../constant/colors';
import strings from '../../constant/strings';
import styles from './styles';
import Images from '../../images';

class AddUser extends Component {
	


	renderText = (heading, style) => {
		return(
			<Text style={style} adjustsFontSizeToFit>{heading}</Text>
		)
	}

	renderTextInput = () => {
		return(
			<TextInput 
				style={styles.inputText}
				placeholder={'Enter Name'}
			></TextInput>
		)
	}
	

	renderButton = () =>{
		return(
			<Text style={styles.button}>{strings.common.save}</Text>
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
				<View style={styles.subContainer}>
					{this.renderText(strings.common.userDetails, styles.title)}
					{this.renderTextInput()}
					{this.renderButton()}
				</View>
            </View>
		);
	}
}


export default AddUser;
