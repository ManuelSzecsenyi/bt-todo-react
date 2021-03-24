import React from "react";
import {View, TextInput, StyleSheet} from "react-native";

export const Footer = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                placeholderTextColor="#E1E8EB"
                placeholder="Eine Aufgabe hinzufügen"
            />
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#698C99",
        padding: 20,
        borderTopStartRadius: 15,
        borderTopEndRadius: 15
    },
    text: {
        fontSize: 17,
        fontFamily: 'Roboto-Regular',
        color: "#ffffff",
    }
});