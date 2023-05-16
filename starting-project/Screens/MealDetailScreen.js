import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Button,
} from "react-native";
import List from "../Component/MealDetail/List";
import Subtitle from "../Component/MealDetail/Subtitle";
import MealDetails from "../Component/MealDetails";
import { MEALS } from "../Data/DummyData";
import { useLayoutEffect } from "react";
import IconButton from "../Component/IconButton";
import { FavorateContext } from "../store/context/FavorateContext";

const MealDetailScreen = ({ route, navigation }) => {
    const { ids, addFavorate, removeFavorate } = useContext(FavorateContext);
    console.log("id", ids);

    const mealId = route.params.mealId;
    console.log(route.params);

    const displayedMealDetail = MEALS.filter(meal => meal.id === mealId);

    const MealIsFavorate = ids?.includes(mealId);

    const favHandler = () => {
        if (MealIsFavorate) {
            removeFavorate(mealId);
        } else {
            addFavorate(mealId);
        }
        console.log("hi");
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        color="white"
                        icon={MealIsFavorate ? "star" : "star-outline"}
                        title="Fav"
                        onPress={favHandler}
                    />
                );
            },
        });
    }, [navigation, favHandler]);

    return (
        <ScrollView style={styles.root}>
            <Image
                style={styles.image}
                source={{ uri: displayedMealDetail[0].imageUrl }}
            />
            <Text style={styles.text}>{displayedMealDetail[0].title}</Text>
            <MealDetails
                duration={displayedMealDetail[0].duration}
                affordability={displayedMealDetail[0].affordability}
                complexity={displayedMealDetail[0].complexity}
                textStyle={styles.detailText}
            />
            <View style={styles.bottomOuter}>
                <View style={styles.bottomItem}>
                    <Subtitle title="Ingredients" />
                    <List data={displayedMealDetail[0].ingredients} />
                    <Subtitle title="Steps" />
                    <List data={displayedMealDetail[0].steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    root: {
        marginBottom: 32,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    image: {
        width: "100%",
        height: 350,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        margin: 8,
        color: "white",
    },
    detailText: {
        color: "white",
    },
    bottomItem: {
        maxWidth: "80%",
    },
    bottomOuter: {
        alignItems: "center",
    },
});
