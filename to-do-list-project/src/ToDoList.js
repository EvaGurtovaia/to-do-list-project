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
                },
                {
                    task: "Bake Cookies",
                    id: uuidv4(),
                },
            ],
        };
        this.addNewTodo = this.addNewTodo.bind(this);
    }

    addNewTodo(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo],
        });
    }

    delete(id) {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id),
        });
    }

    render() {
        const todos = this.state.todos.map((todo) => {
            return (
                <ToDo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    delete={() => this.delete(todo.id)}
                />
            );
        });

        return (
            <div>
                <ul>
                    <div className="ToDoList">{todos}</div>
                </ul>
                <NewToDoForm addNewTodo={this.addNewTodo} />
            </div>
        );
    }
}
export default ToDoList;
