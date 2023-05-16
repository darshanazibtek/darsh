import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = ({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}) => {
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate("MealsDetails", {
            mealId: id,
        });
    };
    return (
        <View style={styles.mealItem}>
            <Pressable
                onPress={pressHandler}
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.button.pressed : null,
                ]}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            style={styles.image}
                            source={{ uri: imageUrl }}
                        />
                        <Text style={styles.text}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity}
                    />
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 4,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        flex: 1,
        opacity: 0.2,
    },

    innerContainer: {
        borderRadius: 8,
    },
    image: {
        width: "100%",
        height: 200,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        margin: 8,
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
