import axios from "axios";

const TodoService = {

    getTodos: async function() {
        try {
            const resp = await axios.get("https://radiant-spire-08360.herokuapp.com/")
            return resp.data;
        } catch (err) {
            console.log(err);
        }
    },

    createTodo: async function(todo) {
        try {
            const resp = await axios.post("https://radiant-spire-08360.herokuapp.com/", todo)
            return resp.data;
        } catch (err) {
            console.log(err);
        }
    },

    updateTodo: async function(todo) {
        try {
            const resp = await axios.put("https://radiant-spire-08360.herokuapp.com/", todo)
            return resp.data;
        } catch (err) {
            console.log(err);
        }
    }


}

export default TodoService;