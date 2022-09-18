import React, { Component } from "react";
import TodoItem from './TodoItem';

class TodosList extends Component{
    render(){
        return(
            <div>
            <h1>To do s</h1>
                <ul>
                    {this.props.todos.map(todo =>(
                        <TodoItem key = {todo.id} todo = {todo} />
                    ))}
                </ul>
            </div>
    )
}        
}

export default TodosList;