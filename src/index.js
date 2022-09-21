import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
//component file
import BaseRouter from "./functionBased/components/BaseRouter"

//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <BaseRouter />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  )