import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { store,persistor } from './store/index'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { increment,reset } from './store/slices/counterSlice'
import {PersistGate} from 'redux-persist/es/integration/react';
import Header from './components/Header/Header';


const EnteryPoint = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={{flex:1}}>
      <Header />
      <View style={styles.container}>
        <View style={styles.watch}>
        <View style={styles.countContainer}>
        <Text style={styles.count}>
          {count}
        </Text>
        </View>
        </View>
        <View style={styles.watchBtn}>
        <TouchableOpacity style={styles.increase} onPress={()=>dispatch(increment())}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reset} onPress={()=>dispatch(reset())}>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <EnteryPoint />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'pink',
    flex:1,
    justifyContent:'center'
  },
  watch:{
    backgroundColor:'black',
    width:'60%',
    alignSelf:'center',
    borderRadius:120,
    height:'29%',
    justifyContent:'center'
  },
  watchBtn:{
    backgroundColor:'black',
    width:'60%',
    alignSelf:'center',
    borderRadius:50,
    height:'10%',
    marginTop:-20,
    flexDirection:'row-reverse',
    justifyContent:'space-between'
  },
  reset:{
    backgroundColor:'red',
    height:60,
    width:60,
    borderRadius:50,
    alignSelf:'flex-end',
    marginBottom:10,
    marginHorizontal:10
  },
  increase:{
    backgroundColor:'white',
    height:60,
    width:'50%',
    borderRadius:50,
    alignSelf:'flex-end',
    marginBottom:10,
    marginRight:10
  },
  countContainer:{
    backgroundColor:'#2B2A33',
    width:'60%',
    alignSelf:'center',
    borderRadius:8
  },
  count:{
    color:'white',
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    padding:8
  }
})


export default App;
