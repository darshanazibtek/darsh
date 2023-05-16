import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CategoryGridTile from "../Component/CategoryGridTile";
import { CATEGORIES } from "../Data/DummyData";

const CategoriesScreen = ({ navigation }) => {
    const renderCategoryItem = itemData => {
        const pressHandler = () => {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
            });
        };

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    };
    return (
        <View>
            <FlatList
                data={CATEGORIES}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    );
};

export default CategoriesScreen;
