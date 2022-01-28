import React from "react";
import Travelimage from '../Images/back.jpg'
import Card from "./Card";
import image1 from '../Images/3.jpg'
import image2 from '../Images/4.jpg'
import image3 from '../Images/5.jpg'

function Travel(){
    return(
     <div className="TravelArea">
          <h2><strong><i>Required</i></strong> to Visit</h2>
          <div className="Images">
              <img src= {Travelimage} className="MainImg"/>
              <div className="Imports">
                    <Card 
                      img = {image1}
                      place = 'Car Tour Africa 10 days'
                      numberofpeople = {6}
                      days = {10}
                      price = '$700'
                    
                    />
                     <Card 
                      img = {image2}
                      place = 'Travel to Mt Kilimanjaro'
                      numberofpeople = {12}
                      days = {5}
                      price = '$200'
                      
                    />
                     <Card 
                      img = {image3}
                      place = 'Visit South Africa'
                      numberofpeople = {3}
                      days = {4}
                      price = '$300'
                     
                    />
              </div>
          </div>
     </div>
    )
}

export default Travel