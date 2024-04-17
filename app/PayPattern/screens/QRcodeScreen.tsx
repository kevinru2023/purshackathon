import React from 'react';
import { View, Text, Image, Pressable, Alert, StyleSheet} from 'react-native';
import { commonStyles } from './styles/commonstyles';

const QRcodeScreen: React.FC = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.titleText}>PayPattern</Text>

      <View style={commonStyles.circle}>
        <Image source={require('./assets/qr-code.png')} style={commonStyles.logo}/>
      </View>

      <View style={commonStyles.rectangle}>

          <Pressable style={commonStyles.button} onPress={() => Alert.alert('Imagine Uploading Image here :)')}>
            <Text style={[commonStyles.buttonText,{fontSize:20}]}>1. Upload Image</Text>
          </Pressable>

          <Text style={styles.or}>Or</Text>
          
          <Pressable style={commonStyles.button} onPress={() => Alert.alert('imagine selection here :)') }>
            <Text style={[commonStyles.buttonText,{fontSize:20}]}>2. Select Image</Text>
          </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  or:{
    fontSize:20, 

  } 
}); 
export default QRcodeScreen;