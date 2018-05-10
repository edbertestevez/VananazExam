import { StyleSheet, Dimensions  } from 'react-native';

const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /4;

// export const IMAGE_HEIGHT = 150;
// export const IMAGE_HEIGHT_SMALL = 80;

export default StyleSheet.create({
	fixed_center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo:{
		height: IMAGE_HEIGHT,
    	resizeMode: 'contain',
	},
	login_form: {
		justifyContent: 'center',
		marginHorizontal: 18,
	},
	c_input: {
		borderRadius: 5,
		borderColor: '#704DB3',
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
	},
	btn_login:{
		width: '100%',
		height: 50,
		backgroundColor: '#704DB3',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		marginVertical: 20
	}
});