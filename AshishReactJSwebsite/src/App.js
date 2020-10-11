import React from "react"
import Navbar from "./Navbar"
import Banner from "./Banner"
import Portfolio from "./Portfolio"
import About from "./About"
import Interests from "./Interests"
import Form from "./Form"
import Footer from "./Footer"
const App=()=>{
    return(
        <div>
            <Navbar />
            <Banner />
            <Portfolio />
            <About />
            <Interests />
            <Form />
            <Footer />
        </div>
    )
}

export default App