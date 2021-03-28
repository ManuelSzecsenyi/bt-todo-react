import React, {Component} from "react";
import {View, TextInput, Image, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {TodoItem} from "./todoItem";

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: {}
        };
    }

    _addToList() {
        this.props.addTodo?.(this.state.task);
        console.log(this.state.task)
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.text}
                    placeholderTextColor="#E1E8EB"
                    placeholder="Eine Aufgabe hinzufügen"
                    onChangeText={(task) => this.setState({task})}
                    value={this.state.task}
                />
                <TouchableWithoutFeedback onPress={ () => this._addToList()}>
                    <View>
                        <Image source={require("../assets/save-btn.png")} />
                    </View>
                </TouchableWithoutFeedback>

            </View>
        )
    };
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