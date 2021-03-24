import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import moment from "moment";
import 'moment/locale/de'

export const Header = () => {
    return (
        <View style={{marginStart: 10}}>
            <View
                style={{
                    flexDirection:"row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 30,
                    marginBottom: 20,
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
            <Text style={styles.date}>{moment().locale('de').format('dd. DD.MM.YY')}</Text>
            <Text style={styles.label}>Meine Aufgaben</Text>

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
        fontWeight: "500",
        fontFamily: 'Roboto-Medium'
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
    },
    date: {
        fontSize: 34,
        fontWeight: "500",
        fontFamily: 'Roboto-Medium'
    },
    label: {
        fontSize: 19,
        fontWeight: "500",
        fontFamily: 'Roboto-Medium',
        marginTop: 5,
        marginBottom: 20
    }
});