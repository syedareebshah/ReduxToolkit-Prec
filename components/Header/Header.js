import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../../store/slices/themeSlice'


const Header = () => {
  const isLight = useSelector((state) => state.theme.isDark)
    console.log(isLight);
  const dispatch = useDispatch()
  return (
    <View style={[styles.container,{
      backgroundColor: isLight? 'black':'pink',
    }]}>
    <Text style={[styles.text,
      {color: isLight? 'white':'black'},
    ]}>Tasbeeh Counter</Text>
    <TouchableOpacity onPress={()=>dispatch(changeTheme(!isLight))} >
        <Ionicons name={isLight?'sunny-sharp':'moon'} color={isLight ? 'white':'black'} size={25} />
    </TouchableOpacity>  
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingRight:10
  },
  text:{
    fontSize:20,
    padding:20,
    fontWeight:'bold',
  },
  
  
})


export default Header;
