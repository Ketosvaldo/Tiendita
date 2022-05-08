import React from 'react';
import {StyleSheet, Button,Text, View} from 'react-native';
import {texto, numero} from './DetailScreen';

function MenuScreen({navigation}) {
    return (
        <View style={{flex:3,justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Tarea #{numero}</Text>
            <Text style={styles.containerText}>{texto}</Text>
            <Button title="Volver" onPress={() => navigation.goBack()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    containerText: {
        justifyContent: 'center',
        alignItems:'center',
        margin: 20,
        padding:5,
        width: 300,
        height: 100,
        backgroundColor: 'gray'
    }
})
export default MenuScreen;