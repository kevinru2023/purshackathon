import React from 'react';
import { View, 
  Text,
  TextInput,
  StyleSheet,  
  Pressable,
  Alert,
  SafeAreaView,
  Image} from 'react-native';
import { commonStyles } from './styles/commonstyles';
import { useNavigation } from '@react-navigation/native';

const SignInScreen: React.FC = () => {
  //i hate react native. 
  const navigation = useNavigation();
  //down below is the logic stuff for the email and password here we should add backend stuffs 
  const [emailtext, ChangeTextEmail] = React.useState('Email');
  const [passwordtext, ChangeTextPassword] = React.useState('Password');

  return (
    <View style={commonStyles.container}>

      <Text style={commonStyles.titleText}>PayPattern</Text>

      <Text style={styles.subheadingtext}>Personalize your payments</Text>

      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <View style={commonStyles.rectangle}>
        <SafeAreaView>
        <Text style={commonStyles.textforboxs}>Email</Text>
          <TextInput
          //grab user email input and validate it probably 
            style={commonStyles.input}
            onChangeText={ChangeTextEmail}
            value={emailtext}
            autoCapitalize='none'
            clearTextOnFocus={true}
          />
          <Text style={commonStyles.textforboxs}>Password</Text>
          <TextInput
          //grabbing user input here 
            style={commonStyles.input}
            onChangeText={ChangeTextPassword}
            value={passwordtext}
            autoCapitalize='none'
            clearTextOnFocus= {true}
            secureTextEntry= {true}
          />
        </SafeAreaView>

        <Pressable
        //add logic for sign in screen here 
          style={commonStyles.button}
          onPress={() => navigation.navigate('Home')} //gonna change this because home is actually gonna be a tab nav 
        >
          <Text style={commonStyles.buttonText}>Sign in</Text>
        </Pressable>

        <Text>Don't have an account? Sign up now!</Text>

        <Pressable
        //add logic for sign up button gotta connect to db at some point 
          style={commonStyles.button}
          onPress={() => navigation.navigate('SignUp')}
  
        >
          <Text style={commonStyles.buttonText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subheadingtext:{
    fontSize:18, 
    color: 'white',
    textAlign: 'center', 
  },  

  logo: {
    width:100, 
    height:100,   
  }, 
});

export default SignInScreen;
