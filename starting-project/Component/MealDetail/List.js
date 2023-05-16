import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
    return (
        <View style={styles.listItem}>
            {data.map((item, i) => (
                <Text key={item} style={styles.itemText}>
                    {item}
                </Text>
            ))}
        </View>
    );
};

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
    },
    itemText: {
        color: "white",
        textAlign: "center",
        backgroundColor: "orange",
        borderRadius: 5,
        margin: 5,
        fontSize: 18,
    },
});
