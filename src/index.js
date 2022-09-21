import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
//component file
import TodoContainer from "./classBased/components/TodoContainer"

//stylesheet
import "./classBased/App.css"

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <TodoContainer />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  )