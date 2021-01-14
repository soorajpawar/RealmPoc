import { Platform } from 'react-native';
import strings from '../constant/strings';

const isIOS = Platform.OS === strings.common.platforms.ios;

const fontNames = {
	default: isIOS ? 'Quicksand-Regular' : 'quicksandRegular',
	medium: isIOS ? 'Quicksand-Medium' : 'QuicksandMedium',
	bold: isIOS ? 'Quicksand-Bold' : 'QuicksandBold',
};

export default fontNames;
