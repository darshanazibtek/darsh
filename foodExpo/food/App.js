import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, SafeAreaView} from 'react-native';
import StartGame from './Screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './Screens/GameScreen';
import React from 'react';
import GameOverScreen from './Screens/GameOverScreen';

export default function App() {

  const [userNumber, SetUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    SetUserNumber(pickedNumber);
    setGameOver(false);
  }

  const gameOverHandler = () => {
    setGameOver(true);
  }

  let Screen = <StartGame onPickNumber={pickedNumberHandler} />;
  console.log("usernum",userNumber); 
  if (userNumber) {
    Screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver && userNumber) {
    Screen= <GameOverScreen/>
  }

  

  return (

    <LinearGradient colors={['#4c919f', '#3b5998', '#192f6a']}  style={styles.rootScreen}> 
      <ImageBackground>
        <SafeAreaView >
          {Screen}
        </SafeAreaView>
      </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
  }
});
