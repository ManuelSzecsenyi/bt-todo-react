import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";


export const Header = () => {
    return (
        <View
            style={{
                flexDirection:"row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 30,
                marginBottom: 30,
                marginStart: 10,
                marginEnd: 10
            }}
        >
            <MenuBtn></MenuBtn>
            <Text style={styles.text}>ToDo</Text>
            <Image
                style={styles.image}
                source={{
                    uri: "https://images.unsplash.com/photo-1610832510948-427621807e1b"
                }}
            />

        </View>
    );
}

export const MenuBtn = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.circle} />
                <View style={styles.circle} />
            </View>

            <View style={styles.row}>
                <View style={styles.circle} />
                <View style={styles.circle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    text: {
        fontSize: 26,
        fontWeight: "600"
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10000,
        backgroundColor: "#000000",
        margin: 2
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10000
    }
});