import React, { Component } from "react";
import TodoItem from './TodoItem';

class TodosList extends Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo =>(
                        <TodoItem 
                            key = {todo.id} 
                            todo = {todo} 
                            handleChangeProps = {this.props.handleChangeProps}
                            deleteTodoProps = {this.props.deleteTodoProps}
                            setUpdate = {this.props.setUpdate}
                        />
                    ))}
                </ul>
            </div>
    )
}        
}

export default TodosList;