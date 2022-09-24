import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';



const Header = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Tasbeeh Counter</Text>
    <TouchableOpacity style={styles.theme}>
    </TouchableOpacity>  
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingRight:10
  },
  text:{
    fontSize:20,
    padding:20,
    fontWeight:'bold',
    color:'white'
  },
  theme:{
    height:20,
    width:20,
    backgroundColor:'red',
  }
  
})


export default Header;
