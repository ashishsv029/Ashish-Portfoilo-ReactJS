import React from "react"
import "./startbootstrap-freelancer-gh-pages/css/styles.css"
import File from './resume/file.pdf'
import dp from './startbootstrap-freelancer-gh-pages/assets/img/ashblack.jpeg';
const Banner=()=>{
    const downloadFile = () => {
        window.location.href = "src/resume/file.pdf"
      }
    return(
        <header class="masthead bg-banner text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <img class="masthead-avatar mb-5" src={dp} alt="" />
                    <h1 class="masthead-heading text-uppercase mb-0" style={{color:'#FFD700'}}>Nag Ashish S V</h1>
                <br/>
                <h3 class="masthead-subheading font-weight-light mb-0">Web Developer-Programmer-Designer</h3>
        
                <button class="btn btn-primary" onclick={downloadFile} style={{backgroundColor:"black",border:"1px solid gold",width:"14rem",height:"3rem",marginTop:"4rem"}}>Download Resume</button>
            </div>
        </header>
    )
}
export default Banner