import React, {useState} from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {StyleSheet} from 'react-native';
import {FacebookApi} from '../../utils/Social';
import Loading from '../Loading';
import * as firebase from 'firebase';

export default function LoginFacebook() {
  const login = async data => {
    const credentials = firebase.auth.FacebookAuthProvider.credential(
      data.accessToken.toString(),
    );
    await firebase
      .auth()
      .signInWithCredential(credentials)
      .then(() => {
        console.log('Login correcto');
      })
      .catch(() => {
        console.log('Error accediendo con facebook');
      });
  };
  return (
    <LoginButton
      onLoginFinished={(error, result) => {
        if (error) {
          console.log('login has error: ' + error);
        } else if (result.isCancelled) {
          console.log('login is cancelled.');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            console.log('data', data);
            login(data);
          });
        }
      }}
      onLogoutFinished={() => console.log('logout.')}
    />
  );
}
