import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import { v4 as uuidv4 } from "uuid";

class ToDoList extends Component {
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

    render() {
        const todos = this.state.todos.map((todo) => {
            return <ToDo key={todo.id} id={todo.id} task={todo.task} />;
        });

        return (
            <div>
                <ul>
                <div className="ToDoList">{todos}</div>
                </ul>
                <NewToDoForm />
            </div>
        );
    }
}
export default ToDoList;
