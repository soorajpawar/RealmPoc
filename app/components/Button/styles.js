import { StyleSheet } from 'react-native';
import colors from '../../constant/colors';
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: colors.red,
        color: colors.white,
        padding: 10,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
      },
      text: {
        color: colors.white,
      },
});

export default styles;
