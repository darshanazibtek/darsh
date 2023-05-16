
import { View, Text, Pressable ,StyleSheet} from 'react-native'
import React from 'react'


const PrimaryButton = ({ children, onPressHandling }) => {
    
    return (
        <View style={styles.btnOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? [styles.btnInnerContainer, styles.pressed] : styles.btnInnerContainer}
                onPress={onPressHandling} android_ripple={{ color: '#72063c' }}>
        
            <Text style={styles.btnText}>{children}</Text>
          
            </Pressable>
            </View>
    
  )
}



export default PrimaryButton;

const styles = StyleSheet.create({
    btnOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow:"hidden"
    },

    btnInnerContainer: {
        backgroundColor: '#72063c', 
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin:4
    },
    btnText: {
        height: 20,
        color: 'white',
       textAlign: 'center',
    },
    pressed: {
        opacity:0.75
    }
})