import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {validateEmail} from '../../utils/Validation'
import * as firebase from 'firebase';

export default function RegisterForm() {

	// Estados
	const [hidePassword, setHidePassword] = useState(true);
	const [hideRepeatPaswword, setHideRepeatPassword] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	const register = async() => {
		if (!email || !password || !repeatPassword) {
			console.log('Todos los campos son obligatorios');
			return;
		}

		if ( !validateEmail(email)) {
			console.log('El email no es correcto');
			return;
		}

		if (password !== repeatPassword) {
			console.log('Las contraseñas no son iguales');
			return;
		}

		// registro correcto
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(()=>{
				console.log('Usuario creado correctamente')
			})
			.catch( e => {
				console.log(e);
			})
	}
    return(
        <View style={styles.formContainer}>
			<Input placeholder='Correo electónico'
				containerStyle={styles.inputForm}
				onChange={e => setEmail(e.nativeEvent.text)}
				rightIcon={
					<Icon
						type='material-community'
						name='at'
						iconStyle={styles.iconRight}
					/>
				}
			/>
			<Input
				placeholder='Contraseña'
				password={true}
				secureTextEntry={hidePassword}
				containerStyle={styles.inputForm}
				onChange={e => setPassword(e.nativeEvent.text)}
				rightIcon={
					<Icon
						type='material-community'
						name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
						iconStyle={styles.iconRight}
						onPress={() => setHidePassword(!hidePassword)}
					/>
				} 
			/>
			<Input
				placeholder='Repetir Contraseña'
				password={true}
				secureTextEntry={hideRepeatPaswword}
				containerStyle={styles.inputForm}
				onChange={e => setRepeatPassword(e.nativeEvent.text)}
				rightIcon={
					<Icon
						type='material-community'
						name={hideRepeatPaswword ? 'eye-outline' : 'eye-off-outline'}
						iconStyle={styles.iconRight}
						onPress={() => setHideRepeatPassword(!hideRepeatPaswword)}
					/>
				} 
			/>
			<Button
				title='Unirse'
				containerStyle={styles.btnContainerRegister}
				buttonStyle={styles.btnRegister}
				onPress={register}
			/>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
	},
	inputForm: {
		width: '100%',
		marginTop: 20
	},
	iconRight: {
		color: '#c1c1c1'
	},
	btnContainerRegister: {
		marginTop: 20,
		width: '95%',
	},
	btnRegister: {
		backgroundColor: '#00a680'
	}
})