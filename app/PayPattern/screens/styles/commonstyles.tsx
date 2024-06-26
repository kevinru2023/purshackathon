import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2A2A',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 42,
    color: 'white',
    textAlign: 'center',
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

  input: {
    flexGrow:0,
    margin: 12,
    width: 250, 
    borderColor:'gray', 
    borderWidth: 1,
    padding: 10,
  },

  textforboxs: { 
    textAlign: 'left', 
    fontSize: 12,  
    marginLeft: 12,
    marginTop: 1, 
  }, 
  
  rectangle:{
    flex:1,  
    borderRadius: 30,
    backgroundColor: 'white', 
    padding: 10,  
    justifyContent: 'center',
    alignItems: 'center',
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
});
