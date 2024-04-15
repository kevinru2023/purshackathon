import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { commonStyles } from './styles/commonstyles';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.titleText}>PayPattern</Text>
      
      <View style={styles.rectangle}>
        <Pressable
        //sign up button 
            style={commonStyles.button}
            onPress={() => navigation.navigate('SignIn')} // Navigate to SignUp screen 
          >
            <Text style={commonStyles.buttonText}>Sign Up</Text>
          </Pressable>
        <Pressable
        //sign in button 
            style={commonStyles.button}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={commonStyles.buttonText}>Sign In</Text>
          </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle:{
    flex:1,  
    borderRadius: 30,
    backgroundColor: 'white', 
    padding: 10,  
    justifyContent: 'center',
    alignItems: 'center',
   },
}) 

export default SignUpScreen;