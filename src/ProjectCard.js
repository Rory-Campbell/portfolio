import React, {Component} from 'react';
import LinkButton from './LinkButton';
import './ProjectCard.css';


const sampleCard = (props) =>{
        return(

           <div className="mainContainer">
               <div className="theCard">
                   <div className="theFront">
                       <div className="cardBody">
                            <h4 className="cardTitle">{props.cardTitle}</h4>
                            <h5>Skills Used:</h5>
                            <ul className="cardSkills">
                                {props.cardSkills}
                            </ul>
                        </div>
                   
                   
                   </div>

                   
                   <div className="theBack container">
                   <p className="cardText">
                                {props.cardText}
                    </p>
                       <div className="backButtons">
                       {props.cardButton}
                       </div>

                       
                       </div>
               </div>
           </div>

            
        )
}
export default sampleCard;