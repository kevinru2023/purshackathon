import React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { commonStyles } from './styles/commonstyles';


const SettingsScreen: React.FC = () => {
  const [nametext, ChangeTextName] = React.useState('bob');
  const [passwordtext, ChangeTextPassword] = React.useState('Password');

  return (
    <View style={commonStyles.container}>

      <Text style={styles.textabovebox}>Current Email</Text>
      <TextInput style={[commonStyles.input, styles.inputtextbox ]} editable= {false} >bob@gmail.com</TextInput>

      <Text style={styles.textabovebox}>Change Name</Text>
      <TextInput 
      style={[commonStyles.input, styles.inputtextbox]}
      onChangeText={ChangeTextName}
            value={nametext}
            autoCapitalize='none'
            clearTextOnFocus={true}
      ></TextInput>

      <Text style={styles.textabovebox}>Change Password</Text>
      <TextInput style={[commonStyles.input, styles.inputtextbox]}
        onChangeText={ChangeTextPassword}
        value={passwordtext}
        autoCapitalize='none'
        clearTextOnFocus= {true}
        secureTextEntry= {true}
      ></TextInput>  
      
      <TouchableHighlight
        style={commonStyles.button}
        underlayColor="#36BF51" // Set the color for the button when pressed to a lighter shade of gray
      >
          <Pressable
            style={({ pressed }) => [
              commonStyles.button,
              { 
                backgroundColor: pressed ? '#36BF51' : '#4CF567', // Adjust opacity when pressed
              }
            ]}
          >
            <Text style={commonStyles.buttonText}>Save Changes</Text>
          </Pressable>
      </TouchableHighlight>

      <TouchableHighlight
        style={commonStyles.button}
        underlayColor="#7A1E1E" // Set the color for the button when pressed to a lighter shade of gray
      >
          <Pressable
            style={({ pressed }) => [
              commonStyles.button,
              { 
                backgroundColor: pressed ? '#7A1E1E' : '#F54C4C', // Adjust opacity when pressed
              }
            ]}
          >
            <Text style={commonStyles.buttonText}>Discard Changes</Text>
          </Pressable>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  textabovebox:{
    fontSize: 16, 
    color:'#AFA5A5', 
    alignSelf: 'flex-start',
    marginLeft: 46, 
    marginBottom: -8, 
  },
  inputtextbox:{
    backgroundColor: '#FFFFFF', 
    overflow: 'hidden', 
    borderRadius:12,  
  } 

});

export default SettingsScreen;