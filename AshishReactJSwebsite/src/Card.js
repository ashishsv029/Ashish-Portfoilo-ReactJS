import React from "react"

const Card=({str="burger" ,no="1"})=>{
    return (
        <div className="col-md-6 col-lg-4 mb-5">   
            <div className="portfolio-item mx-auto" data-toggle="modal" data-target={`#portfolioModal${no}`}>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <div   style={{maxWidth:"100%",height: "15rem",backgroundColor:"black"}} >            
                    <img  className="img-fluid" style={{height:"52%",width:"100%",margin:"auto",marginTop:"45px"}} src={require(`./startbootstrap-freelancer-gh-pages/assets/img/portfolio/${str}.svg`)}></img>
                </div>            
            </div>
         </div>
    )
}

export default Card;