import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import { v4 as uuidv4 } from "uuid";
import "./ToDoList.css";

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
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
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
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    render() {
        const todos = this.state.todos.map((todo) => {
            return (
                <ToDo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    isCompleted={todo.isCompleted}
                    delete={() => this.delete(todo.id)}
                    update={this.update}
                    toggle={this.toggleCompletion}
                />
            );
        });

        return (
            <div className="ToDoList">
                <ul>
                    <div>{todos}</div>
                </ul>
                <NewToDoForm addNewTodo={this.addNewTodo} />
            </div>
        );
    }
}
export default ToDoList;
