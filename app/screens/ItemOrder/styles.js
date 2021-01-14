import { StyleSheet } from 'react-native';
import colors from '../../constant/colors';
import fontsize from '../../constant/fontsize';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import fontNames from '../../fonts';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection:'row',
	},
	subContainer:{
		flex:1, 
		justifyContent:'flex-end',
		marginLeft:40 ,
		marginBottom:'15%'
	},
	title: {
		color:colors.white,
		fontSize: RFPercentage(2.5),
		fontWeight:'bold',
		marginVertical:5,
		letterSpacing:1,
		fontFamily:fontNames.bold,
	},
	name: {
		color:colors.white,
		fontSize: RFPercentage(5.5),
		fontWeight:'bold',
		marginVertical:20,
		letterSpacing:-1,
		fontFamily:fontNames.bold,
		
	},
	step: {
		fontSize: fontsize.verySmall,
		paddingHorizontal: 1,
		textAlign: 'center',
	},
	pieView:{
		alignItems: 'center', 
		justifyContent:'center',
		marginHorizontal: 5,
		backgroundColor:'#00000000'
	},
	image: {
        flex: 1,
        resizeMode: 'contain',
		justifyContent:'center',
    },
	pieContainer:{
		flexDirection: 'row',
		marginTop: 70,
		width:'50%'
	},
	gauge:{
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
	},
	gaugeText: {
		backgroundColor: 'transparent',
		color: colors.darkGrey,
		fontSize: fontsize.default,
	},
	button:{
		backgroundColor: colors.red,
		color: colors.white,
		fontSize: RFPercentage(2.6),
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
	imageView:{
		flex:1,
		marginHorizontal:5,
		width:'100%'
	}
});

export default styles;
