import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import MealList from "../Component/MealsList/MealList";
import { MEALS, CATEGORIES } from "../Data/DummyData";

const MealsOverviewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter(meal => {
        return meal.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            category => category.id === catId
        ).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, []);

    return <MealList items={displayedMeals} />;
};

export default MealsOverviewScreen;
