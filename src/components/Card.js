import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faHeart,faClock,faBook,faHelicopter,faGift} from '@fortawesome/free-solid-svg-icons'


function Card(props){
    let[on,setColor] = React.useState()//giving each card its own state
    const styles = {
        backgroundColor:on ? '#fff':"#000",
        color:on ? "#000":"#fff"
   }
    function ChangeColor(){
       setColor((previousColor)=>{
          return !previousColor
       })
    }

    return(
          <div className="CardSection" style={styles} onClick={ChangeColor}>
              
              <img src={props.img} />
                <div className="content">
                <h2>
                     <FontAwesomeIcon icon={faPaperPlane} className="plane"/>
                    {props.place}
                 </h2>
                  <h3>
                    Store
                    <FontAwesomeIcon icon={faHelicopter} className="heart"/>
                   <strong>Jimmy Media</strong>    
                   </h3>
                   <div className="people">
                       <FontAwesomeIcon icon={faClock} className="clock"/>
                       <p>{props.numberofpeople} people</p>
                   </div>
                   <div className="days">
                       <FontAwesomeIcon icon={faBook} className="book"/>
                       <p>{props.days} days</p>
                   </div>
                   <div className="footer">
                       <div className="left-footer">
                           <FontAwesomeIcon icon={faHeart} className="heart-o" />
                           <FontAwesomeIcon icon={faGift} className="gift"/>
                       </div>
                       <h1>{props.price}</h1>
                   </div>
                </div>
          </div>
    )
}

export default Card