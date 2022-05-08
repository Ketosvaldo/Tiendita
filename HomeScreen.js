import React from 'react';
import {Button, View, Text} from 'react-native';
import './styles';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
                title="Ir a Tarea"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
}

export default HomeScreen;