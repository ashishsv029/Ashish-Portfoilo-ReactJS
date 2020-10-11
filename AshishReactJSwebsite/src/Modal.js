import React from "react"

const Modal=({logo="hw",no="",title="project",desc="",link=""})=>{
    return(
       
        <div class="portfolio-modal modal fade" id={`portfolioModal${no}`} tabindex="-1" role="dialog" aria-labelledby={`portfolioModal${no}Label`} aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i style={{color:"gold"}} class="fas fa-times"></i></span>
                </button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                              
    <h2 class="portfolio-modal-title text-uppercase mb-0" id={`portfolioModal${no}Label`} style={{color:"black"}}>{title}</h2>
                                
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i style={{color:"gold"}} class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                
                                <img className="img-fluid rounded mb-5"  alt="" src={require(`./startbootstrap-freelancer-gh-pages/assets/img/portfolio/${logo}.svg`)} />
                                
                                <p class="mb-5">{desc}</p>
                                <button class="btn btn-primary" style={{backgroundColor:"gold",border:"1px solid white",color:"black"}} >
                                    
                                    <a href=  {`${link}`} style={{display:"inline-block",color:"black",textDecoration:"none"}} >View Project</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal;