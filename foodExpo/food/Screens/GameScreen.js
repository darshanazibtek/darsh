import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import NumberContainer from "../Components/Game/NumberContainer";
import PrimaryButton from "../Components/PrimaryButton";
import Title from "../Components/UI/Title";

const guessGenerator = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return guessGenerator(min, max, exclude);
    } else {
        return rndNum;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = guessGenerator(1, 100, userNumber);
    const [rndNum, setrndNum] = useState(initialGuess);

    const nextGuessHandler = direction => {
        // direction if lower or higher

        if (
            (direction === "lower" && initialGuess < userNumber) ||
            (direction === "higher" && initialGuess > userNumber)
        ) {
            Alert.alert("You are lieng", "you know this is wrong", [
                { text: "sorry", style: "cancel" },
            ]);
            return;
        }
        if (direction === "lower") {
            maxBoundary = initialGuess;
        } else {
            minBoundary = initialGuess + 1;
        }
        console.log(minBoundary, maxBoundary);
        const newRndNum = guessGenerator(
            minBoundary,
            maxBoundary,
            initialGuess
        );
        setrndNum(newRndNum);
    };

    useEffect(() => {
        if (initialGuess == userNumber) {
            onGameOver();
        }
    }, [userNumber, initialGuess, onGameOver]);
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{initialGuess}</NumberContainer>
            <View>
                <Text>Higher or LOwer</Text>
                <View>
                    <PrimaryButton
                        onPressHandling={nextGuessHandler.bind(this, "lower")}
                    >
                        {" "}
                        Guess Lower
                    </PrimaryButton>
                    <PrimaryButton
                        onPressHandling={nextGuessHandler.bind(this, "higher")}
                    >
                        {" "}
                        Guess Higher{" "}
                    </PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        marginTop: 100,
        padding: 12,
    },
});
