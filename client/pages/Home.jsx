import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const Home = () => {

  const { userDetails, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <View>
      <Image 
        style={{ width: 200, height: 200, resizeMode: 'contain' }}
        source={{ uri: userDetails.picture }}
      />
      <Text>{ userDetails.email }</Text>
      <Text>{ userDetails.fname }</Text>
      <Text>{ userDetails.lname }</Text>
      <Text>{ userDetails.mobile }</Text>

      <TouchableOpacity
        onPress={handleLogout}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );

}

export default Home

const styles = StyleSheet.create({});