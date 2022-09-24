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
  const isLight = useSelector((state) => state.theme.isDark)
  const dispatch = useDispatch()

  return (
    <View style={{flex:1}}>
      <Header />
      <View style={[styles.container,{
        backgroundColor:isLight?'pink':'#180000',
      }]}>
        <View style={[styles.watch,
        {
          backgroundColor:isLight?'black':'green',
        }]}>
        <View style={[styles.countContainer,{
          backgroundColor: isLight?'#2B2A33':'#90EE90',
        }]}>
        <Text style={[styles.count,{
          color:isLight?'white':'black',
        }]}>
          {count}
        </Text>
        </View>
        </View>
        <View style={[styles.watchBtn,{
        backgroundColor:isLight?'black':'green',
        }]}>
        <TouchableOpacity style={[styles.increase,{
          backgroundColor:isLight?'white':'pink',
        }]} onPress={()=>dispatch(increment())}>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.reset,{
          backgroundColor:isLight?'red':'#000080',
        }]} onPress={()=>dispatch(reset())}>
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
    flex:1,
    justifyContent:'center'
  },
  watch:{
    width:250,
    alignSelf:'center',
    borderRadius:120,
    height:250,
    justifyContent:'center'
  },
  watchBtn:{
    width:250,
    alignSelf:'center',
    borderRadius:50,
    height:80,
    marginTop:-20,
    flexDirection:'row-reverse',
    justifyContent:'space-between'
  },
  reset:{
    height:60,
    width:60,
    borderRadius:50,
    alignSelf:'flex-end',
    marginBottom:10,
    marginHorizontal:10
  },
  increase:{
    height:60,
    width:'50%',
    borderRadius:50,
    alignSelf:'flex-end',
    marginBottom:10,
    marginRight:10
  },
  countContainer:{
    width:'60%',
    alignSelf:'center',
    borderRadius:8
  },
  count:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    padding:8
  }
})


export default App;
