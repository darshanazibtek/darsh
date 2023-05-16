import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ title }) => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.subTitle}> {title}</Text>
        </View>
    );
};

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        color: "lightblue",
        fontSize: 18,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
        padding: 6,
    },
    conatiner: {
        borderBottomColor: "white",
        borderBottomWidth: 2,
        marginHorizontal: 25,
    },
});
