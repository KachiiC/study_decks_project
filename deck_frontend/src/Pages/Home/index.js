import React from 'react'
// CSS
import './index.css'
// Components
import {Link} from "react-router-dom"

function Home (){
    return (
        <div className="home-container">
            <h1>Home</h1>
            <Link to="/studyarea"><h3>Study Area</h3></Link>
        </div>
    )
}
export default Home