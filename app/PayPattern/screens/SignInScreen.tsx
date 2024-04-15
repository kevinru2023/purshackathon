import React from 'react';
import { View, 
  Text,
  TextInput,
  StyleSheet,  
  Pressable,
  Alert,
  SafeAreaView,
  Image} from 'react-native';

const SignInScreen: React.FC = () => {
  const [emailtext, ChangeTextEmail] = React.useState('Email');
  const [passwordtext, ChangeTextPassword] = React.useState('Password');
  return (
    <View style={styles.container}>

      <Text style={styles.titletext}>PayPattern</Text>
      <Text style={styles.subheadingtext}>Personalize your payments</Text>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.rectangle}>
        <SafeAreaView>
        <Text style={styles.textforboxs}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={ChangeTextEmail}
            value={emailtext}
            autoCapitalize='none'
            clearTextOnFocus={true}
          />
          <Text style={styles.textforboxs}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={ChangeTextPassword}
            value={passwordtext}
            autoCapitalize='none'
            clearTextOnFocus= {true}
            secureTextEntry= {true}
          />
        </SafeAreaView>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Sign in pressed')}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
        <Text>Don't have an account? Sign up now!</Text>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Sign up pressed')}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#2F2A2A',
    padding:24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titletext:{
    fontSize:42, 
    color:'white',
    textAlign: 'center',  
  },
  subheadingtext:{
    fontSize:18, 
    color: 'white',
    textAlign: 'center', 
  },  

  input: {
    flexGrow:0,
    margin: 12,
    width: 250, 
    borderColor:'gray', 
    borderWidth: 1,
    padding: 10,
  },

  button: {
    justifyContent: 'center', 
    alignItems:'center', 
    backgroundColor: '#4CF567',
    padding: 10,
    width: 250, 
    height: 50,
    marginVertical: 10,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },

  rectangle:{
    flex:1,  
    borderRadius: 30,
    backgroundColor: 'white', 
    padding: 10,  
    justifyContent: 'center',
    alignItems: 'center',
   },

  logo: {
    width:100, 
    height:100,   
  }, 
  textforboxs: { 
    textAlign: 'left', 
    fontSize: 12,  
    marginLeft: 12,
    marginTop: 1, 
  }
});

export default SignInScreen;
