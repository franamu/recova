import React, {useRef} from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements';
import LoginForm from '../../components/Account/LoginForm';
import Toast from 'react-native-easy-toast';
import LoginFacebook from '../../components/Account/LoginFacebook';

export default function Login(props) {
  const {navigation} = props;
  const toastRef = useRef();
  return (
    <ScrollView>
      <Image
        source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount navigation={navigation} />
        <Divider style={styles.divider} />

        <View>
          <LoginFacebook />
        </View>
      </View>
      <Toast ref={toastRef} position="center" />
    </ScrollView>
  );
}

function CreateAccount(props) {
  const {navigation} = props;

  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta?{' '}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate('Register')}>
        Registrarme
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 20,
    marginLeft: 20,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: '#c1c1c1',
    margin: 40,
  },
});
