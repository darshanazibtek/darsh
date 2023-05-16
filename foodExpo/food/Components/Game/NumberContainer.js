import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';

const NumberContainer = ({children}) => {
  return (
      <View style={styles.container}>
          <Text style={styles.textoutput}>{ children }</Text>
    </View>
  )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.ColorYellow,
        padding: 24,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:8
    },
    textoutput: {
        color: Colors.ColorYellow,
        fontSize: 36,
        fontWeight:"bold"
    }
})