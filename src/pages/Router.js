import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from './WelcomePage/WelcomePage'
import LoginPage from './LoginPage/LoginPage'

const Stack = createNativeStackNavigator();

function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
        </Stack.Navigator>
    );
}

export default App;
