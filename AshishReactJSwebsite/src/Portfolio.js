import React from "react"
import "./startbootstrap-freelancer-gh-pages/css/styles.css"
import logo1 from "./startbootstrap-freelancer-gh-pages/assets/img/portfolio/cabin.png"
import logo2 from "./startbootstrap-freelancer-gh-pages/assets/img/portfolio/ecommerce.svg"
import logo3 from "./startbootstrap-freelancer-gh-pages/assets/img/portfolio/house.svg"
import logo4 from "./startbootstrap-freelancer-gh-pages/assets/img/portfolio/hw.svg"
import logo5 from "./startbootstrap-freelancer-gh-pages/assets/img/portfolio/backtracking.svg"
import logo6 from "./startbootstrap-freelancer-gh-pages/assets/img/portfolio/game.svg"
import svg1 from "./startbootstrap-freelancer-gh-pages/assets/img/portfolio/burger.svg"
import Card from "./Card"
import Modal from "./Modal"
const Portfolio=()=>{
    return(
        <div>
        <section className="page-section portfolio" id="projects">
            <div className="container">
                <br/>
                <h2 className="page-section-heading text-center text-uppercase  mb-0" style={{color:"black",marginTop:"20px",marginBottom:"20px"}}>My <span style={{color:"gold"}}>Projects</span></h2>     
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line" style={{backgroundColor:"gold"}} ></div>
                    <div class="divider-custom-icon"><i style={{color:"black"}} class="fas fa-star"></i></div>
                    <div class="divider-custom-line" style={{backgroundColor:"gold"}}></div>
                </div>
                <br/><br/><br/>
                <div className="row">
                    <Card  str="burger" no="1"/>
                    <Card str="ecommerce" no="2"/>
                    <Card str="house" no="3"/>
                    <Card str="hw" no="4" />
                    <Card str="backtracking" no="5" />
                    <Card str="game" no="6" />
                </div>
            </div> 
        </section>
        <Modal logo="burger" no="1" title="MessBill Tracker" desc="This application is built using NodeJs, ExpressJs framework ,Mongo DB and ejs templates for front end and it keeps track of daily and monthly mess bill of students,day to day food feedback is accepted and classifies those feedbacks into positives and negatives and updates the owner,this is done using a Feedback Classifier API which is built using Random Forest classifier ,NLP and Flask. Other statistics were displayed through charts and graphs using chartJs API.The authentication system for the application is designed using PassportJs" link="https://github.com/ashishsv029/Mess-Bill-Tracker"/>
        <Modal logo="ecommerce" no="2" title="E Commerce Web Application" desc="This application is designed using complete MERN Stack for selling clothes online. The main features of this application are secured login system, user dashboard where the user can see the clothes and can add to cart etc,admin dashboard where the admin can manage categories,products, quantities etc, cart management,checkout page integrated with Braintree payment gateway" link="https://github.com/ashishsv029/E-Commerce-Web-Application-Using-MERN-Stack"/>
        <Modal logo="house" no="3" title="Bangalore City House Price Prediction Application" desc="A Machine learning application for predicting Bangalore City house prices based on features like house location, type of area, BHK, no of bathrooms, balconies etc. A streamlit app is being designed for showcasing the entire workflow of the prediction application. The prediction is done using Ridge Regression and a r2 score of around 0.9 is obtained after doing hyper parameter tuning ,which shows that the model is accurate enough to predict the house prices." link="https://github.com/ashishsv029/House-Price-Prediction"/>
        <Modal logo="hw" no="4" title="HandWririting Recognition Using CNN(AlexNet)" desc="This is an Automatic writer identification system that helps in determining and identifying whether the given handwriting is truly matched and assigned to the claimed writer of handwriting.An alexnet based cnn architecture followed by an ANN is built for classifying the handwritings efficiently" link="#"/>
        <Modal logo="backtracking" no="5" title="Shortest Path Simulator Using Backtracking" desc="A simulator that shows the shortest path between two selected points in a matrix. It is also visualizes the backtracking concept.It is built using HTML,CSS and Javascript" link="https://github.com/ashishsv029/Shortest-Path-Simulator-using-Backtracking"/>
        <Modal logo="game" no="6"  title="Snake Game Using Java Threads" desc="This is a snake game built using Java threads and AWT framework.It has features like both keyboard and mouse controls, highscore tracking, bordertouch death, random food generation etc" link="https://github.com/ashishsv029/Snake-Game-Using-Java"/>
        
        
        <br />
        </div>
    )
}

export default Portfolio