import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, TouchableOpacity, Pressable} from 'react-native';
import GoalInput from './Component/GoalInput.js';
import Category from './Screens/Category.js';

const App = (props) => {
  
  const [listData, setListData] = useState([]);

  const handleAddItem = (textInputValue) => {
    if (textInputValue !== '') {
      const newItem = {
        id: String(listData.length + 1),
        value: textInputValue,
        
      };
      setListData([...listData, newItem]);
      
    }
    else{
      Alert.alert(
        'Error!!!!',
        'Please enter valid task and then press add',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
  };

  

  const handleDelete = (id) => {
    setListData((prevData) => prevData.filter((item) => item.id !== id));

    
  };

  const renderItem = ({ item }) => (
    <Pressable android_ripple={{color:"red"}} onPress={()=>handleDelete(item.id)}>
    <View style={{flexDirection:'row' , justifyContent:"space-between", backgroundColor:"#5e0acc"}} >
      <Text style={{padding:10 , fontSize:20, color:"white" , fontWeight:"bold" ,}}>{item.id}.{item.value} </Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Text style={{ color: 'red', fontSize:15 , }}>Delete</Text>
      </TouchableOpacity> 
      </View>
      </Pressable>
  );

  return (
    // <Category/>
     <View style={{ paddingTop: 60,paddingHorizontal:16 , flex:1}}>
       <GoalInput addGoals={handleAddItem} />
       <Text style={{fontSize:30 , color:"brown" , textDecorationStyle:"dotted" , padding:20}}> List Of Task</Text>
       <FlatList
         data={listData}
         renderItem={renderItem}
         keyExtractor={(item) => item.id}
         style={{fontSize:30 , padding:20}}
       />
     </View>
  );
};

export default App;
