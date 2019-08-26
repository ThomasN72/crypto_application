import {Grid} from 'semantic-ui-react'
import React, {Component} from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCss3, faHtml5, faNode, faJs, faAws, faJenkins, faGit} from '@fortawesome/free-brands-svg-icons'


const Segment = (props) => {
    const colorInfo = props.colorInfo;
    const colorStyle = {};
    const fontStyle = {}
    switch(colorInfo){
        case "primary":
            colorStyle.borderLeft = '4px solid #4066d5';
            fontStyle.fontSize = '15px';
            fontStyle.color = '#4066d5'
            break;
        case "secondary":
            colorStyle.borderLeft = '4px solid #1bc88a';
            fontStyle.fontSize = '15px';
            fontStyle.color = '#1bc88a'
            break;
        case "task":
            colorStyle.borderLeft = '4px solid #37b9cc';
            fontStyle.fontSize = '15px';
            fontStyle.color = '#37b9cc'
            break;
        case "others":
            colorStyle.borderLeft = '4px solid #f6c23d';
            fontStyle.fontSize = '15px';
            fontStyle.color = '#f6c23d'
            break;
        default:
    }
    return(
    
        <div className="segment-box" style={colorStyle}>
            <h4 style={fontStyle}>{props.title}</h4>
            {props.children}
        </div>
    )
}

export default Segment;

