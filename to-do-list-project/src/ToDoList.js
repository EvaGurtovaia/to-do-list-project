import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

class ToDoList extends Component {
    render() {
        return (
            <div>
                <div className="ToDoList">
                    <ToDo />
                </div>
                <NewToDoForm />
            </div>
        );
    }
}
export default ToDoList;
