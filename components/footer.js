import React from "react";
import {View, TextInput, Image, StyleSheet} from "react-native";

export const Footer = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                placeholderTextColor="#E1E8EB"
                placeholder="Eine Aufgabe hinzufügen"
            />
            <Image source={require("../assets/save-btn.png")} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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