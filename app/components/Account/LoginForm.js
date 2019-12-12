import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {validateEmail} from '../../utils/Validation';
import Loading from '../Loading';

export default function LoginForm(props) {
  const {toastRef} = props;
  const [hidePassword, sethidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisibleLoading] = useState(false);

  const login = () => {
    setIsVisibleLoading(true);
    
    if (!email || !password) {
      toastRef.current.show('Todos los campos son obligatorios');
      setIsVisibleLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      toastRef.current.show('El email no es correcto');
      setIsVisibleLoading(false);
      return;
    }

    // enviar informacion a servicio
    
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.InputForm}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.InputForm}
        password={true}
        secureTextEntry={hidePassword}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            iconStyle={styles.iconRight}
            onPress={() => sethidePassword(!hidePassword)}
          />
        }
      />
      <Button
        title="Ingresar"
        containerStyle={styles.btnContainerLogin}
        onPress={login}
      />
      <Loading isVisible={isVisible}  text='Iniciando sesión'/>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  InputForm: {
    width: '100%',
    marginTop: 20,
  },
  iconRight: {
    color: '#c1c1c1',
  },
  btnContainerLogin: {
    marginTop: 20,
    width: '95%',
  },
});
