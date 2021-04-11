import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

export const TodoItem = (props) => {
    return (
        <View style={styles.container}>
            <Image style={[styles.image]} source={require("../assets/item-checked.png")} />
            <Text style={[styles.text, props.item.done ? styles.textDone : null]} >
                {props.item.text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        padding: 20,
        margin: 5,
        borderRadius: 5
    },
    image: {
      marginEnd: 8
    },
    text: {
        fontSize: 17,
        fontFamily: 'Roboto-Regular',
        color: "#000000",
    },
    textDone: {
        textDecorationLine: 'line-through',
    }
});