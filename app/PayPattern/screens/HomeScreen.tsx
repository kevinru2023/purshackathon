import React, { useState } from 'react';
import { View, Text, Pressable, Modal, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import { commonStyles } from './styles/commonstyles';

const HomeScreen: React.FC = () => {
  const [scanModalVisible, setScanModalVisible] = useState(false);
  const [requestModalVisible, setRequestModalVisible] = useState(false);
  const [amount, setAmount] = useState('');

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.titleText}>PayPattern</Text>
      <View style={commonStyles.circle}>
        <Image source={require('./assets/qr-code.png')} style={commonStyles.logo}/>
      </View>

      <Text style={styles.nametext}>Bob</Text>

      {/* Buttons */}
      <Pressable
        style={commonStyles.button}
        onPress={() => setScanModalVisible(true)}
      >
        <Text style={commonStyles.buttonText}>Scan</Text>
      </Pressable>

      <Pressable
        style={commonStyles.button}
        onPress={() => setRequestModalVisible(true)}
      >
        <Text style={commonStyles.buttonText}>Request</Text>
      </Pressable>

      {/* Scan Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={scanModalVisible}
        onRequestClose={() => setScanModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* gotta change this to be the name of the user who requested but this is just for demo*/}
            <Text style={styles.RequestText}>Coffee Shop Has Request</Text>
            {/* This will in the future be the amount the user has requested */}
            <Text style={styles.RequestText}>$1000</Text>
            <Pressable style={[commonStyles.button, {backgroundColor:'#F54C4C'},{alignSelf:'center'}]} onPress={() => setScanModalVisible(false)}>
              <Text style={styles.ButtonText}>Deny</Text>
            </Pressable>
            <Pressable style={[commonStyles.button, {alignSelf:'center'}]} onPress={() => setScanModalVisible(false)}>
              <Text style={styles.ButtonText}>Send</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Request Modal all this code was from chatgpt shout to that fr*/}
      <Modal
        animationType="slide"
        transparent={true}
        visible={requestModalVisible}
        onRequestClose={() => setRequestModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Select Request Amount</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Amount"
              keyboardType="numeric"
              value={amount}
              onChangeText={handleAmountChange}
            />
            {/* Numpad */}
            <View style={styles.numpad}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
                <TouchableOpacity key={number} style={styles.numpadButton} onPress={() => handleAmountChange(amount + number)}>
                  <Text style={styles.numpadButtonText}>{number}</Text>
                </TouchableOpacity>
              ))}
              {/*clear button which also clears the amount  */}
              <TouchableOpacity style={styles.numpadButton} onPress={() => setAmount('')}>
                <Text style={styles.numpadButtonText}>Clear</Text>
              </TouchableOpacity>

              {/*enter button*/}
              <TouchableOpacity style={styles.numpadButton} onPress={() => setRequestModalVisible(false)}>
                <Text style={styles.numpadButtonText}>Enter</Text>
              </TouchableOpacity>

            </View>
          </View>
          {/* Close Button */}
          <View style={styles.closeButtonContainer}>
            <Pressable style={styles.closeButton} onPress={() => setRequestModalVisible(false)}>
              <Text style={styles.ButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:125, 

  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  numpad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  numpadButton: {
    width: '33.33%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  numpadButtonText: {
    fontSize: 20,
  },
  closeButtonContainer: {
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: '#F54C4C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  RequestText:{
    fontSize: 24, 
    fontWeight: 'bold', 
    color:'black',
    alignSelf:'center'
  },
  nametext:{
    fontSize:24, 
    color:'black', 
    backgroundColor:'white', 
    borderRadius:10, 
    overflow:'hidden', 
    padding: 5,  
  }, 
});

export default HomeScreen;
