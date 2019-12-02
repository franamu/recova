import React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

function UserGuest(props) {
  const {navigation} = props;
  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/img/user-guest.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Consulta tu perfil de La Recova</Text>
        <Text style={styles.description}>
          ¿ Cómo describirías tu mejor restaurante? Busca y visualiza los
          mejores restaurantes de una forma sencilla, vota cuál te ha gustado
          más.
        </Text>
        <View style={styles.viewBtn}>
          <Button
            style={styles.btn}
            containerStyle={styles.btnContainer}
            title="Ver tu perfil"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default withNavigation(UserGuest);

const styles = StyleSheet.create({
  viewBody: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#2196F3',
  },
  btnContainer: {
    width: '70%',
  },
});
