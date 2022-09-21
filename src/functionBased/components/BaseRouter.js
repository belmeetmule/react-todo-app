import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodoContainer from "./TodoContainer"
import Navbar from "./Navbar"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"

const BaseRouter  = ()=>{
    return(
        <>
        <Navbar />
        
        <Routes>
            <Route path="/" element = { <TodoContainer />} />
            <Route path="/about" element = { <About />} />
            <Route path="*" element = {<NotMatch />}/>
            </Routes>
        </>
        
    )
}

export default BaseRouter