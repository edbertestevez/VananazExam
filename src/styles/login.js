import { StyleSheet } from 'react-native';
import { commonColor } from '../../native-base-theme/commonColor';

module.exports = StyleSheet.create({
	fixed_center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	login_form: {
		justifyContent: 'center',
		marginHorizontal: 18,
	},
	form_label:{
		fontSize: 16,
		color: '#000'
	},
	c_input: {
		borderRadius: 5,
		borderColor: commonColor.brandPrimary,
		marginTop: 5,
	},
	text_button: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	text_error:{
		marginBottom: 16,
		color: 'red',
		fontStyle: 'italic'
	},
	e_container:{
		height: 20
	}
})