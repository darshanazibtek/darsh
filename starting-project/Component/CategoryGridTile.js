import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryGridTile = ({ title, color, onPress }) => {
    const navigate = useNavigation();
    return (
        <View style={[styles.gridItem]}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.button.pressed : null,
                ]}
                android_ripple={{ color: "#ccc" }}
                onPress={onPress}
            >
                <View
                    style={[styles.InnerContainer, { backgroundColor: color }]}
                >
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        overflow: "hidden",
        textAlign: "center",
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        flex: 1,
        opacity: 0.2,
    },

    InnerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default CategoryGridTile;
