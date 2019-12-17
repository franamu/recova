import React, {useState} from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {StyleSheet} from 'react-native';
import {FacebookApi} from '../../utils/Social';
import * as firebase from 'firebase';

export default function LoginFacebook(props) {
  const {toastRef, navigation} = props;

  // Obtiene datos de facebook y los lleva a firebase para logearse
  const login = async data => {
    const credentials = firebase.auth.FacebookAuthProvider.credential(
      data.accessToken.toString(),
    );
    await firebase
      .auth()
      .signInWithCredential(credentials)
      .then(() => {
        console.log('login correcto');
        navigation.navigate('MyAccount');
      })
      .catch(() => {
        console.log('algo salio mal');
        toastRef.current.show(
          'Error accediendo con Facebook, intentelo más tarde.',
        );
      });
  };
  return (
    <LoginButton
      onLoginFinished={(error, result) => {
        if (error) {
          toastRef.current.show(
            'Upps hubo problemas con el inicio de sesión de Facebook, intenta más tarde.',
          );
        } else if (result.isCancelled) {
          toastRef.current.show('Inicio de sesión cancelado.');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            // logeo los datos a firebase
            login(data);
          });
        }
      }}
      onLogoutFinished={() =>
        toastRef.current.show('Sesión de Facebook finalizada.')
      }
    />
  );
}
