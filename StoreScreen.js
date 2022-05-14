import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import items from './data/items';
import Box from './Box';
import NavigationBottom from './NavigationBottom';

function StoreScreen() {
    return (
        <View style={{flex:3,justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
            <ScrollView style={styles.container}>
                <Text>{
                    items.map((item, i) => (
                        <Box
                            key = {i}
                            item = {item.id}
                            title = {item.title}
                            description = {item.description}
                            image = {item.image}
                            stock = {item.stock}
                        />
                    )) 
                }
                </Text>
            </ScrollView>
           <NavigationBottom/>
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center', 
        margin: 20,
        padding:5,
        width: 300,
        height: 100,
    },
    container:{
        marginBottom:80,        
    }
})

export default StoreScreen;