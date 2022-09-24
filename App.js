import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import { store,persistor } from './store/index'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './store/slices/counterSlice'
import {PersistGate} from 'redux-persist/es/integration/react';


const EnteryPoint = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
      <View style={{backgroundColor:'pink',flex:1,justifyContent:'center'}}>
        <Text style={{color:'black',textAlign:'center',fontSize:22,fontWeight:'bold'}}>
          COUNTER APP
        </Text>
        <Text style={{color:'black',textAlign:'center',fontSize:22}}>
          {count}
        </Text>
        <TouchableOpacity onPress={()=>dispatch(increment())}>
        <Text style={{color:'black',textAlign:'center',fontSize:22,marginTop:30}}>
          +
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>dispatch(decrement())}>
        <Text style={{color:'black',textAlign:'center',fontSize:22,marginTop:30}}>
          -
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>dispatch(incrementByAmount(5))}>
        <Text style={{color:'black',textAlign:'center',fontSize:22,marginTop:30}}>
          -
        </Text>
        </TouchableOpacity>

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


export default App;
