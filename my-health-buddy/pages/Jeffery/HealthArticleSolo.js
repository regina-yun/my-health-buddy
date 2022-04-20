import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import data from './data'

const HealthArticleSolo = (props) => {

    return (
        <View style={styles.container}>
            <Text>This is a solo Article Screen</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default HealthArticleSolo;