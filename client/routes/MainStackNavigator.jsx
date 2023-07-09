import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../pages/Splash'; 
import Home from '../pages/Home'; 
import Login from '../pages/Login'; 
import Register from '../pages/Register'; 
import { AuthContext } from '../providers/AuthProvider';

const Stack = createStackNavigator();

const MainStackNavigator = () => {

  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            isLoggedIn ? (
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Splash" component={Splash} />
              </>
            ): (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
  );

}

export default MainStackNavigator;