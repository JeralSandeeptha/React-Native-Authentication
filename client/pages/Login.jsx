import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';

const Login = ({navigation}) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const { setUserDetails, setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = async () => {
    await axios.post('http://192.168.1.138:6000/api/auth/login', {
      email: email,
      password: password
    })
      .then( (res) => {
        console.log(res);
        console.log(res.data.user);
        setUserDetails(res.data.user);

        if(res.status == 200){
          alert("Login Success");
          setIsLoggedIn(true);
        }
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  return (
    <View>

      <Text>Email</Text>
      <TextInput onChangeText={ (text) => {
        console.log(text);
        setemail(text);
      } }/>

      <Text>Password</Text>
      <TextInput onChangeText={ (text) => {
        console.log(text);
        setpassword(text);
      } }/>

      <TouchableOpacity
        onPress={handleLogin}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      {/* special */}
      {/* When you want to programertically navigate make sure to call inside callback function */}
      <TouchableOpacity
        onPress={ () => {
          navigation.navigate('Register')
        }}
      >
        <Text>Create a new account</Text>
      </TouchableOpacity>

    </View>
  )
  
}

export default Login

const styles = StyleSheet.create({})