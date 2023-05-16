import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../Component/MealsList/MealList";
import { FavorateContext } from "../store/context/FavorateContext";
import { MEALS, CATEGORIES } from "../Data/DummyData";

const FavoratesScreen = () => {
    const { ids } = useContext(FavorateContext);

    const displayedMeals = MEALS.filter(meal => ids.includes(meal.id));

    if (displayedMeals.length == 0) {
        return (
            <View style={styles.favView}>
                <Text style={styles.text}>There are no favorate meals</Text>
            </View>
        );
    }

    return <MealList items={displayedMeals} />;
};

export default FavoratesScreen;

const styles = StyleSheet.create({
    favView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        FontWeight: "bold",
        fontSize: 20,
    },
});
