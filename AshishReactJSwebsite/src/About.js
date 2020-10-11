import React from "react"
import "./startbootstrap-freelancer-gh-pages/css/styles.css"
import Skill from "./Skill"
const About=()=>{
  return(
    <section  class="page-section  text-white mb-0" id="ts" style={{backgroundColor:"#a1a6a2"}}>
            <div class="container">                
              <h2 class="page-section-heading text-center text-uppercase"><span style={{color:"gold"}}>My </span><span style={{color:"black"}}>Technical Skills</span></h2>  
                <div class="divider-custom divider-light" style={{marginTop:"1rem"}}>
                    <div class="divider-custom-line" style={{backgroundColor:"gold"}} ></div>
                    <div class="divider-custom-icon"><i style={{color:"gold"}} class="fas fa-star"></i></div>
                    <div class="divider-custom-line" style={{backgroundColor:"gold"}}></div>
                </div>
                <div class="row" style={{marginTop:"6rem"}}>
                    <div class="col-sm-12 col-md-12 ml-auto"><h4 class="lead">
                      <ul>
                        <Skill section="Programming Languages : " content="C,C++, Python and Java" />
                        <Skill section="Frontend Technologies :" content="HTML, CSS ,Bootstrap, JavaScript, React"/>
                        <Skill section="Backend Technologies :" content="NodeJs, ExpressJs, Flask,Rest APIs" />
                        <Skill section="CSE Fundementals : " content="Datastructures, Algorithms and Database Management Systems" />
                        <Skill section="Machine learning : " content="Regression and Classification algorithms , EDA, data visualization,ML pipelines, NLP" />
                        <Skill section="Databases : " content="Oracle ,MongoDB" />
                        <Skill section="ML Tools : " content="Anaconda, Jupyter Notebook, Google Collab, numpys, Pandas, Seaborn, NLTK and Streamlit" />
                        <Skill section="IDE's : " content="Pycharm, VS Code, Eclipse" />
                        <Skill section="OS : " content="Windows, Linux" />
                      </ul>
                      </h4></div>
                </div>
            </div>
        </section>
  )
}


export default About