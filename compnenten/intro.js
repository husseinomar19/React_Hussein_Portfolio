import React from "react";
import graph3 from '../img/my-schape.png';
import { SiVisualstudiocode } from "react-icons/si";
import graph1 from '../img/graph (1).png';
import graph2 from '../img/graph (2).png';
import avatar from '../img/avatar.png';




function Intro(){
    return(
        <div className="intro">
            <div className="intro_title">
              <img id="span_animation1" src={graph1} alt="span_animation"></img>
              <img id="span_animation2" src={graph2} alt="span_animation"></img>
              <h6>HEY THERE!</h6>
              <h2>I'am Hussein</h2>
             <h3>A <span>Software Develper</span> <SiVisualstudiocode/></h3>
             <p>I'm a Software Developer. I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            </div>
            <div className="intro_img">
                <img id="my_shape" src={graph3} alt="my-shape"></img> 
                <img id="avatar" src={avatar} alt="avatar"></img> 

            </div>
        </div>
    );
}
export default Intro;