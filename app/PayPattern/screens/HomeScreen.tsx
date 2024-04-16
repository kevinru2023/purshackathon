import React from 'react';
import { View, 
  Text, 
  Pressable, 
  Alert, 
  StyleSheet, 
  Image
} from 'react-native';
import { commonStyles } from './styles/commonstyles';

const HomeScreen: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.titleText}>PayPattern</Text>

      <View style={styles.circle}>
        <Image source={require('./assets/qr-code.png')} style={styles.logo}/>
      </View>

      <Text style={styles.nametext}>Bob</Text>

      <Pressable
          //scan button 
        style={commonStyles.button}
        onPress={() => Alert.alert('Meow')} // Navigate to SignUp screen 
      >
        <Text style={commonStyles.buttonText}>Scan </Text>
      </Pressable>

      <Pressable
          //request button 
        style={commonStyles.button}
        onPress={() => Alert.alert('Meow')} // Navigate to SignUp screen 
      >
        <Text style={commonStyles.buttonText}>Request</Text>
      </Pressable>
      <View>
        
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  nametext:{
    fontSize:24, 
    color:'black', 
    backgroundColor:'white', 
    borderRadius:10, 
    overflow:'hidden', 
    padding: 5,  
  }, 

  circle:{
    backgroundColor: 'white', 
    borderRadius:90, 
    width: 145, 
    height: 145, 
    justifyContent:'center',
    alignItems: 'center', 
    marginBottom:12, 
  }, 

  logo:{ 
    width:100, 
    height:100,
    marginBottom: 5,  
  }  
  
  
})

export default HomeScreen;