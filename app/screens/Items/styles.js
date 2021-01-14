import { StyleSheet } from 'react-native';
import colors from '../../constant/colors';
import fontsize from '../../constant/fontsize';

const styles = StyleSheet.create({
	container: {
		flex: 1,
        alignContent:'center',
        margin:5
	},
	title: {
		color:colors.black,
		fontSize:fontsize.heading,
		fontWeight:'bold',
        marginVertical:10,
        textAlign:'center',
        alignSelf:'center'
	},
	name: {
		color:colors.white,
		fontSize:fontsize.extraLarg,
		fontWeight:'bold',
		marginVertical:10,
		letterSpacing:1
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
        fontSize: fontsize.default,
        fontWeight:'bold',
		borderRadius:22,
		padding:15,
		textAlign:'center',
        width:200,
        letterSpacing: 1
	},
	imageView:{
        alignItems:'center',
        alignSelf:'center'
    },
    image: {
        resizeMode: 'cover', 
        justifyContent:'center',
        alignSelf:'center',
        width: '100%'
      },
    fillDot: {
        backgroundColor: colors.white,
        borderRadius:6,
        height: 12,
        width: 12,
        marginHorizontal: 5
    } ,
    unfillDot: {
        borderRadius:6,
        borderColor: colors.white,
        borderWidth: 1,
        height: 12,
        width: 12,
        marginHorizontal: 5
    } ,
    dotContainer:{
        flexDirection:'row',
        margin: 10,
    },
    itemContainer:{
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        backgroundColor: colors.gray,
        padding: 15,
        flex:1
    },
    flatListContainer:{
        alignSelf: 'center',
        width: '100%'
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:10,
        marginBottom: 10
    },
    lineView:{
        height: 4,
        backgroundColor: colors.gray,
        width: '100%',
        marginHorizontal:15
    },
    headerItemContainer:{
        backgroundColor:colors.gray, 
        padding:15
    }
      
});

export default styles;
