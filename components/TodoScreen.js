import React, {Component} from "react";
import {View, TouchableWithoutFeedback, Image, StyleSheet, FlatList} from "react-native";
import {Header} from "./header";
import {TodoItem} from "./todoItem";
import {Footer} from "./footer";
import TodoService from "../services/TodoService";
import {Todo} from "../models/Todo";

export default class TodoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: {}
        };
    }

    componentDidMount(){
        this._getTodos();
    }

    async _getTodos() {
        const todos = await TodoService.getTodos();
        console.log(todos);
        this.setState({todoList: todos})
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ flex: 1, backgroundColor: 'powderblue' }}/>
                <FlatList
                    style={{ flex: 2, }}
                    data={this.state.todoList}
                    renderItem={( {item}) =>
                        <TouchableWithoutFeedback onPress={ () => this._getTodos()}>
                            <View>
                                <TodoItem item={item} />
                            </View>
                        </TouchableWithoutFeedback>
                    }
                />
                <Footer />
            </View>
        )
    };

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});