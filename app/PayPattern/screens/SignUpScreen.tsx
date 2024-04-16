import React from 'react';
import { View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import { commonStyles } from './styles/commonstyles';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();

  const [emailtext, ChangeTextEmail] = React.useState('Email');
  const [passwordtext, ChangeTextPassword] = React.useState('Password');
  const [nametext, ChangeTextName] = React.useState('Name'); 

  return (
    <View style={[commonStyles.container, {marginTop:3}]}>
      <Text style={commonStyles.titleText}>PayPattern</Text>
      <View style={commonStyles.rectangle}>
        <SafeAreaView>
              <Text style={styles.textabovebox}>Name</Text>
                      <TextInput
                      //grab user email input and validate it probably 
                        style={commonStyles.input}
                        onChangeText={ChangeTextName}
                        value={nametext}
                        autoCapitalize='none'
                        clearTextOnFocus={true}
                      />
              <Text style={styles.textabovebox}>Email</Text>
                <TextInput
                //grab user email input and validate it probably 
                  style={commonStyles.input}
                  onChangeText={ChangeTextEmail}
                  value={emailtext}
                  autoCapitalize='none'
                  clearTextOnFocus={true}
                />
              <Text style={styles.textabovebox}>Password</Text>
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
          //sign up button 
              style={commonStyles.button}
              onPress={() => navigation.navigate('SignIn')} // Navigate to SignUp screen 
            >
              <Text style={commonStyles.buttonText}>Sign Up</Text>
            </Pressable>
          <Pressable
          //cancel button
              style={[commonStyles.button, { backgroundColor: '#F54C4C' }]}
              onPress={() => navigation.navigate('SignIn')} // Navigate to SignUp screen 
            >
              <Text style={commonStyles.buttonText}>Cancel</Text>
          </Pressable>
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textabovebox:{
    fontSize:18, 
    color: 'black',
    margin: 12, 
    marginTop:3, 
    alignSelf: 'flex-start'
  }, 
}) 

export default SignUpScreen;