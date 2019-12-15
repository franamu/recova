import React, {useState} from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {StyleSheet} from 'react-native';
import {FacebookApi} from '../../utils/social';
import Loading from '../Loading';

export default function LoginFacebook() {
  const login = () => {
    console.log('click me');
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
            console.log('result', result);
            console.log('data', data);
            console.log(data.accessToken.toString());
          });
        }
      }}
      onLogoutFinished={() => console.log('logout.')}
    />
  );
}
