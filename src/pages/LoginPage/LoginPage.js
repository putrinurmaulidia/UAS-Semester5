import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const App = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.3, backgroundColor: 'orange' }}>
                <Text style={{ fontSize: 25, marginLeft: 230, marginTop: 50 }}>STREET FOOD</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 25, marginLeft: 50, marginTop: 50, color: 'black' }}>Sign in</Text>
                <Text style={{ fontSize: 15, marginLeft: 70, marginTop: 30, color: 'black' }}>EMAIL</Text>
                <Text style={{ fontSize: 15, marginLeft: 70, marginTop: 50, color: 'black' }}>PASSWORD</Text>
                <TouchableOpacity style={{ height: 60, width: 250, backgroundColor: 'orange', borderRadius: 20, marginHorizontal: 50, marginTop: 50 }}>
                    <Text style={{
                        fontSize: 20, textAlign: 'center', marginVertical: 15
                    }}>Sign in</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ height: 50, width: 100, backgroundColor: 'red', borderRadius: 20, marginHorizontal: 50, marginTop: 50 }}>
                        <Text style={{ fontSize: 17, textAlign: 'center', marginVertical: 15 }}>Gmail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 50, width: 100, backgroundColor: 'blue', borderRadius: 20, marginHorizontal: 5, marginTop: 50 }}>
                        <Text style={{ fontSize: 17, textAlign: 'center', marginVertical: 15 }}>Facebook</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, marginLeft: 100, marginTop: 30, color: 'orange' }}>Forget Password?</Text>
                <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 10, color: 'black' }}>Don't have Account? Sign up now</Text>
            </View>
        </View>
    );
}

export default App;