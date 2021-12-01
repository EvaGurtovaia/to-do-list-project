import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    task: "",
                    id: "",
                    completed: "",
                },
            ],
        };
    }
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="todo">Add a task</label>
                    <input type="text" name="todo" id="todo" />
                </div>

                <button>Add</button>
            </form>
        );
    }
}

export default NewToDoForm;
