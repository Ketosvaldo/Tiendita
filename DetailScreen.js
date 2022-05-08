import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function DetailScreen({navigation}) {
    return (
        <View style={{flex:3,justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
            <Text style={{fontSize: 20}}>Tareas</Text>
            <View style={{backgroundColor: 'gray',}}>
               <View style={styles.containerButton}>
                   <Button 
                        title="Tarea 1"
                        onPress={() => TextTarea(1)}
                    />
                    <Button 
                        title="Tarea 2"
                        onPress={() => TextTarea(2)}
                    />
                    <Button 
                        title="Tarea 3"
                        onPress={() => TextTarea(3)}
                    />
                </View>
                <View style={styles.containerButton}>
                    <Button 
                        title="Tarea 4"
                        onPress={() => TextTarea(4)}
                    />
                    <Button 
                        title="Tarea 5"
                        onPress={() => TextTarea(5)}
                    />
                    <Button 
                        title="Tarea 6"
                        onPress={() => TextTarea(6)}
                    />
                </View>
                <View style={styles.containerButton}>
                    <Button 
                        title="Tarea 7"
                        onPress={() => TextTarea(7)}
                    />
                    <Button 
                        title="Tarea 8"
                        onPress={() => TextTarea(8)}
                        />
                    <Button 
                        title="Tarea 9"
                        onPress={() => TextTarea(9)}
                    />
                </View>
            </View>
        </View>
    );
    function TextTarea(nTarea){
        switch(nTarea){
            case 1: texto = "Ver One Piece";  numero = 1; break;
            case 2: texto = "Subir a Oro en LoL"; numero = 2; break;
            case 3: texto = "Tomar agua"; numero = 3; break;
            case 4: texto = "Bañarme"; numero = 4; break;
            case 5: texto = "Buscar algo de cenar"; numero = 5;break;
            case 6: texto = "Conseguir pareja x'd"; numero = 6;break;
            case 7: texto = "Terminar animación idle"; numero = 7;break;
            case 8: texto = "Terminar mis tareas escolares"; numero = 8;break;
            case 9: texto = "Dormir"; numero = 9;break;
        }
        navigation.push('Menu');
    }
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
    }
})

export let texto = "";
export let numero = "";

export default DetailScreen;