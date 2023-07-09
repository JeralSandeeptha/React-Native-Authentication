import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

const Register = ({navigation}) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [mobile, setmobile] = useState('');
  const [picture, setpicture] = useState('');

  const clearDetails = () => {
    setemail('');
    setpassword('');
    setfname('');
    setlname('');
    setmobile('');
    setpicture('');
  }

  const handleLogin = async () => {
    await axios.post('http://192.168.1.138:6000/api/auth/register', {
      email,
      password,
      fname,
      lname,
      mobile,
      picture
    })
      .then( (res) => {
        console.log(res.data);
        clearDetails();
        alert("Successfully Registered");
        navigation.navigate('Login');
      })
      .catch( (error) => {
        console.log(error);
      });
    console.log({ email, password });
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

      <Text>First Name</Text>
      <TextInput onChangeText={ (text) => {
        console.log(text);
        setfname(text);
      } }/>

      <Text>Last Name</Text>
      <TextInput onChangeText={ (text) => {
        console.log(text);
        setlname(text);
      } }/>

      <Text>Mobile</Text>
      <TextInput onChangeText={ (text) => {
        console.log(text);
        setmobile(text);
      } }/>

      <Text>Profile picture</Text>
      <TextInput onChangeText={ (text) => {
        console.log(text);
        setpicture(text);
      } }/>

      <TouchableOpacity
        onPress={handleLogin}
      >
        <Text>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () => {
          navigation.navigate('Login');
        }}
      >
        <Text>Already have an account? Login</Text>
      </TouchableOpacity>

    </View>
  )
  
}

export default Register

const styles = StyleSheet.create({})