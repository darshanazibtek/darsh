import React, { useState } from 'react'
import { StyleSheet,View , TextInput , Button , Alert} from 'react-native'
import PrimaryButton from '../Components/PrimaryButton';
import Colors from '../Constants/Colors';



const StartGame = ({onPickNumber ,userNumber}) => {

 const [enteredNumber, setEnteredNumber] = useState('');
     console.log(`userame`, userNumber)
    console.log(onPickNumber)
    const handleChange = (e) => {
        setEnteredNumber(e);
    }

    const resetInputHandler= () => {
        setEnteredNumber('');
    }   

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredNumber);
        
        if (isNaN(choosenNumber) || choosenNumber<=0 || choosenNumber > 99) {
            //show alert
            Alert.alert(
                'Invalid Number',
                'Please enter a number between 1 and 99',
                [{ text: 'Cancel', style:"default", onPress: resetInputHandler }]
            );
            return;
        }
        console.log(`onPickNumber(choosenNumber): ${choosenNumber}`)
        onPickNumber(choosenNumber);  
        
    }

  return (
      <View style={styles.inputContainer}>
          <TextInput style={styles.numberInput}
              maxLength={2}
              value={enteredNumber}
              onChangeText={handleChange}
              keyboardType="number-pad"
              autoCapitalize='none'
              autoCorrect={false} />
          <View style={styles.btnArrange}> 
              <View style={styles.singlebtn}> 
                  <PrimaryButton onPressHandling={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.singlebtn}> 
              <PrimaryButton onPressHandling={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
              </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius:10,
        padding: 20,
        backgroundColor:Colors.primary500 ,
        elevation: 10,
        shadowColor: "black",
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 8,
        shadowOpacity:0.5
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: "bold",
        width: 50,
        textAlign: "center",
    },
    btnArrange: {
        flexDirection:"row"
    },
    singlebtn: {
        flex: 1,
    }
})


export default StartGame;