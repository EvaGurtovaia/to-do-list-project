import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    task: "Organize Garage",
                    id: uuidv4(),
                    completed: false,
                },
                {
                    task: "Bake Cookies",
                    id: uuidv4(),
                    completed: false,
                },
            ],
        };
    }

    renderItems() {
        return (
            <ul>
                {this.state.todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        );
    }
    render() {
        return (
            <div>
                <h2>To Do List</h2>
                <div className="ToDo">{this.renderItems()}</div>
            </div>
        );
    }
}
export default ToDo;
