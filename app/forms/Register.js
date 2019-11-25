import React from 'react';

import t from 'tcomb-form-native';
import formValidations from '../utils/Validation';

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
      label: 'Nombre (*)',
      placeholder: 'Escribe tu nombre y apellido',
      error: 'Nombre invalido',
    },
    email: {
      label: 'Email (*)',
      placeholder: 'Escribe tu email',
      error: 'Email invalido',
    },
    password: {
      label: 'Contraseña (*)',
      placeholder: 'Escribe tu contraseña',
      error: 'Contraseña inválida',
      password: true,
      secureTextEntry: true,
    },
    passwordConfirmation: {
      label: 'Repetir contraseña',
      placeholder: 'Repite tu contraseña',
      error: 'Contraseña inválida',
      password: true,
      secureTextEntry: true,
    },
  },
};
