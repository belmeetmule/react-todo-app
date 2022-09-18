import React, { Component } from "react";

class TodoContainer extends React.Component{
    state = {
        todos : [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
              },
              {
                id: 2,
                title: "Develop website and add content",
                completed: false
              },
              {
                id: 3,
                title: "Deploy to live server",
                completed: false
              }
        ],
    }
    render(){
        return (
        <div>
            <h1>To do s</h1>
            <ul>
                {this.state.todos.map(item =>(
                    <li> {item.title} </li>
                ))}
            </ul>
        </div>
        )
    }
}

export default TodoContainer;