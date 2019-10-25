import React, {Component} from 'react';

const LinkButton = (props) => {
    return(
        <a 
        href={props.buttonHref} 
        className={props.className}
         role="button" 
         aria-pressed="true">
             {props.buttonText}</a>
    )
}

export default LinkButton;