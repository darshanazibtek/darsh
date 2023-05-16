import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ items }) => {
    const renderMealItem = itemData => {
        const item = itemData.item;
        const mealITtemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };

        return <MealItem {...mealITtemProps} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={items}
                renderItem={renderMealItem}
            />
        </View>
    );
};

export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
