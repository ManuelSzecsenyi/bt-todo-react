import axios from "axios";

const TodoService = {

    getTodos: async function() {
        try {
            const resp = await axios.get("http://10.0.2.2:3000/")
            return resp.data;
        } catch (err) {
            console.log(err);
        }


    },


}

export default TodoService;