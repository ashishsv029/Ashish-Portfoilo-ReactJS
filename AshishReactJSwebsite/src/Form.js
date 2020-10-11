import React from "react"
import "./startbootstrap-freelancer-gh-pages/css/styles.css"

const Form=()=>{
    return(
        <section class="page-section" id="contact" style={{marginTop:"3rem",backgroundColor:"#f2f2f2"}}>
            <div class="container">
                
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"><span style={{color:"gold"}}>Contact </span><span style={{color:"black"}}>Me</span></h2>
                
                <div class="divider-custom">
                    <div class="divider-custom-line" style={{backgroundColor:"black"}}></div>
                    <div class="divider-custom-icon" ><i style={{color:"black"}} class="fas fa-star"></i></div>
                    <div class="divider-custom-line" style={{backgroundColor:"black"}}></div>
                </div>
                
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    
                                    <input class="form-control" id="name" type="text" placeholder="Enter Your Name" required="required" data-validation-required-message="Please enter your name." style={{color:"gold",backgroundColor:"#f2f2f2"}}/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."  style={{color:"gold",backgroundColor:"#f2f2f2"}}/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."  style={{color:"gold",backgroundColor:"#f2f2f2"}}/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."  style={{color:"gold",backgroundColor:"#f2f2f2"}}></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit" style={{backgroundColor:"gold",border:"1px solid gold",width:"9rem",color:"black"}}>Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form