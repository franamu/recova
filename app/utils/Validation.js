import t from 'tcomb-form-native';

export default formValidations = {
  email: t.refinement(t.String, value => {
    return /@/.test(value);
  }),
  password: t.refinement(t.String, value => {
    return value.lenght >= 6;
  }),
};
