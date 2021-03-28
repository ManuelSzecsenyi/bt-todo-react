import React, {Component} from "react";
import {View, TouchableWithoutFeedback, Image, StyleSheet, FlatList} from "react-native";
import {Header} from "./header";
import {TodoItem} from "./todoItem";
import Footer from "./footer";
import TodoService from "../services/TodoService";


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

    addTodo = (todo) => {
        const todos = this.state.todoList;
        const newTodo = {
            id: this.uuidv4(),
            text: todo,
            done: false
        };
        todos.push(newTodo);
        this.setState({todoList: todos});
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
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
                <Footer addTodo={this.addTodo} />
            </View>
        )
    };

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});