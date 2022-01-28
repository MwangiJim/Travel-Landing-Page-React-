import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture,faPlusCircle,faSearch } from '@fortawesome/free-solid-svg-icons'

function Header(){
//     let [on,setState] = React.useState(false)

//   function ChangeAnswer(){
//       setState(prevAnswer => !prevAnswer)
//   }
    return(
       <div className="header">
           <nav>
               <div className="left-side">
                   <FontAwesomeIcon icon={faPlaneDeparture} />
                   <h3>ImagineTours</h3>
               </div>
               <ul>
                   <li><a href="">Home</a></li>
                   <li><a href="">About</a></li>
                   <li><a href="">Discover</a></li>
                   <li><a href="">Products</a></li>
                   <li><a href="">Blog</a></li>
                   <li><a href="">Contact</a></li>
               </ul>
               <button className="Btn">
                   <FontAwesomeIcon icon={faPlusCircle} />
                   Submit a Travel
               </button>
           </nav>
           <div className="textbox">
               <h1>Find <strong><i>Adventures</i></strong> you want to talk about</h1>
              <div className="inputSection">
                <input type='text' placeholder="Search Here"></input>
                  <FontAwesomeIcon icon={faSearch} className="searchBar"/>
              </div>
              {/* <button onClick={ChangeAnswer}>{on === true ?"YES":"NO"}</button> */}
           </div>
       </div>
    )
}

export default Header