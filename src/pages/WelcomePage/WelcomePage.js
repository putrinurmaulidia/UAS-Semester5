import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const App = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 300 }}>
                <Image source={require('../../../aset/Images/OIP.jpeg')}
                    style={{ height: 300, width: 380, }} />
                <Text style={{ fontSize: 39 }}>hello world</Text>
            </View>
            <View style={{
                backgroundColor: 'white', height: 500

            }}>
                <Text style={{ textAlign: 'center', fontSize: 50, marginTop: 40, color: 'black' }}>STREET FOOD</Text>
                <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 50, color: 'black' }}>Authentic Flavors</Text>
                <Text style={{ textAlign: 'center', fontSize: 20, color: 'black' }}>that temp the</Text>
                <Text style={{ textAlign: 'center', fontSize: 20, color: 'black' }}>taste buds</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LoginPage')}
                style={{ height: 50, width: 250, backgroundColor: 'orange', borderRadius: 9, marginHorizontal: 50, marginTop: 90 }}>
                    <Text style={{ fontSize: 28, textAlign: 'center', marginVertical: 5 }}>Get Start Here</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default App;