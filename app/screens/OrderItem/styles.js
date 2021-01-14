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
		fontSize: RFPercentage(5.4),
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
		marginHorizontal: 5
	},
	pieContainer:{
		flexDirection: 'row',
        marginVertical: 10,

	},
	gauge: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
	},
	gaugeText: {
		backgroundColor: 'transparent',
		color: colors.gray,
		fontSize: fontsize.medium,
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
	imageView:{
		flex:1,
		height:200,
		width:200
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent:'center',
        padding:10
      },
    fillDot: {
        backgroundColor: colors.white,
        borderRadius:9,
		height: 18,
        width: 18,
        marginHorizontal: 15
    } ,
    unfillDot: {
        borderRadius:9,
        borderColor: colors.white,
        borderWidth: 3,
        height: 18,
        width: 18,
		marginHorizontal: 15,
    } ,
    dotContainer:{
        flexDirection:'row',
        marginTop: 50,
    }
      
});

export default styles;
