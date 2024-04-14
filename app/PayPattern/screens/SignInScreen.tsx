import React from 'react';
import { View, 
  Text, 
  Button,
  Alert} from 'react-native';

const SignInScreen: React.FC = () => {
  return (
    <View>
      <Text>SignIn Screen</Text>
      <Text>Some More text</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
};

export default SignInScreen;