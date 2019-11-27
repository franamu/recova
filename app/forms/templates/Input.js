import React from "react";
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default (inputTemplate = locals => {
    return (
        <View style={styles.viewContainer}>
            <Input placeholder={locals.config.placeholder}
            leftIcon={<Icon type={locals.config.iconType} name={locals.config.iconName} color='#b3b3b3' size={24}/>}
            password={locals.config.password}
            passwordConfirmation={locals.config.passwordConfirmation}/>
        </View>
    )
});

const styles = StyleSheet.create({
    viewContainer: {
        marginTop: 12,
        marginBottom: 12,
    }
});