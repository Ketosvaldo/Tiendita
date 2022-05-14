import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import NavigationBottom from './NavigationBottom';

function DetailScreen({route}) {
    const {image, title, description, stock} = route.params;
    return (
        <View style={styles.root}>
            <Image source={{uri: image}} style={styles.containerImage}/>
            <View style={styles.containerBox}>
                <Text style={styles.containerTitle}>{title}</Text>
                <Text style={styles.containerText}>{description}</Text>
                <Text style={styles.containerText}>En stock: {stock}</Text>
            </View>
            <NavigationBottom/>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ccff90',
        color: '#000000',
    },
    containerImage:{
        width: 200, 
        height:200, 
        borderRadius: 10,
        borderWidth: 3
    },
    containerTitle:{
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    containerDesc:{
        fontSize: 15,
    },
    containerBox:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 200,
        backgroundColor: 'lightgray'
    },

})
export default DetailScreen;