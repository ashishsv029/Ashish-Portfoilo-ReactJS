import React from "react"
import "./startbootstrap-freelancer-gh-pages/css/styles.css"
const Interests=()=>{
    return (

        <section id="interests" class="page-section  text-white mb-0" >
            <div class="container">
                
                <h2 class="page-section-heading  text-center text-uppercase" style={{color:"gold"}}>My <span style={{color:"black"}}>Areas of Interest</span></h2>
                
                <div class="divider-custom divider-light" style={{marginTop:"1rem"}}>
                    <div class="divider-custom-line" style={{backgroundColor:"black"}} ></div>
                    <div class="divider-custom-icon"><i style={{color:"black"}} class="fas fa-star"></i></div>
                    <div class="divider-custom-line" style={{backgroundColor:"black"}}></div>
                </div>
            
                <div class="row">
                    <div class="col-md-3 col-sm-12">
                    
                    <i  class="interest-icon fa fa-university"></i>
                    <h5 class="inth5" style={{color:"black"}}>Data Structures Algorithms</h5>
                    </div>
                    <div class="col-md-3 col-sm-12">
                    <i  class="interest-icon fa fa-snowflake"></i>
                    <h5 class="inth5" style={{color:"black"}}>Machine Learning</h5>
                    </div>
                    <div class="col-md-3 col-sm-12">
                    <i class="interest-icon fa fa-server"></i>
                    <h5 class="inth5" style={{color:"black"}}>Full Stack Web Development</h5>
                    </div>
                    <div class="col-md-3 col-sm-12">
                    <i class="interest-icon fa fa-database"></i>
                    <h5 class="inth5" style={{color:"black"}}>Database Management Systems</h5>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Interests