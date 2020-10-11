import React from "react"


const Skill=({section="",content=""})=>{
    return(

    <li style={{color:"white",fontWeight:"bold",marginBottom:"1rem"}}>{section}<span class="lead" style={{color:"black"}}>{content}</span></li>
    )
}

export default Skill