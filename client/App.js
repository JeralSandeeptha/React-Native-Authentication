import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './routes/MainStackNavigator';
import AuthStackNavigator from './routes/AuthStackNavigator';
import AuthProvider from './providers/AuthProvider';

export default function App() {

  return <AuthProvider><MainStackNavigator /></AuthProvider>

}

