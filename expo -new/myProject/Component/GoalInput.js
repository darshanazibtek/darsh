import React ,{useState} from 'react'
import { View , TextInput, Button} from 'react-native'

const GoalInput = (props) => {
    const [textInputValue, setTextInputValue] = useState('');
    
    

    const handleTextInputChange = (text) => {
        setTextInputValue(text);
    };
    
    const addGoalHandler = () => {
        props.addGoals(textInputValue);
    }

  return (
           <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput
          style={{ flex: 1, marginRight: 10 , width:"60%" ,borderBottomWidth:3 , borderBottomColor:'purple'}}
          onChangeText={handleTextInputChange}
              placeholder="Enter item"
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
  )
}

export default GoalInput