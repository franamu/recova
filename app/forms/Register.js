import React from 'react';

import t from 'tcomb-form-native';
import formValidations from '../utils/Validation';
import inputTemplate from './templates/Input';

export const RegisterStruct = t.struct({
  name: t.String,
  email: formValidations.email,
  password: formValidations.password,
  passwordConfirmation: formValidations.password,
});

export const RegisterOptions = {
  fields: {
    // Estas propiedades tienen que llamarse igual que el objeto RegisterStruct
    name: {
      template: inputTemplate,
      config: {
        placeholder: 'Escribe tu nombre y apellido',
        iconType: 'material-community',
        iconName: 'account-outline',
      }
    },
    email: {
      template: inputTemplate,
      config: {
        placeholder: 'Escribe tu email'
      }
    },
    password: {
      template: inputTemplate,
      config: {
        placeholder: 'Escribe tu contraseña',
        password: true,
        secureTextEntry: true,
      }
    },
    passwordConfirmation: {
      template: inputTemplate,
      config: {
        placeholder: 'Confirma tu contraseña',
        password: true,
        secureTextEntry: true,
      }
    },
  },
};
