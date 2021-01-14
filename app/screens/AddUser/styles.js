import { StyleSheet } from 'react-native';
import colors from '../../constant/colors';
import fontsize from '../../constant/fontsize';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import fontNames from '../../fonts';

const styles = StyleSheet.create({
	container: {
		flex: 1,
        alignContent:'center',
	},
	subContainer:{
		flex:1, 
		justifyContent:'center',
		alignItems:'center',
	},
	title: {
		color:colors.black,
		fontSize: RFPercentage(2.5),
		fontWeight:'bold',
		marginVertical:5,
		letterSpacing:1,
		fontFamily:fontNames.bold,
	},
	
	button:{
		backgroundColor: colors.red,
		color: colors.white,
		fontSize: RFPercentage(2.8),
		borderRadius:40,
		alignItems:'center',
		alignContent:'center',
		textAlignVertical:'center',
		textAlign:'center',
		width:'45%',
		height:'10%',
		marginTop:10,
		fontWeight:'bold'
	},
	inputText:{
		width:'80%',
		height:'8%',
		borderRadius:10,
		borderColor:colors.darkGrey,
		borderWidth:1,
		marginVertical:5,
		fontSize: RFPercentage(2.4),
		paddingStart:10		
	}
      
});

export default styles;
