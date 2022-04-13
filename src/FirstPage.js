import React from 'react';
import './App.css'
import './index.css'
import playVideoIcon from "./images/Play Video Icon.png"
import rounded_Rectangle from "./images/Rounded Rectangle 1.png"


const FirstPage = () => {
    return (
        <div className="intro">
            <div className="container_1">
                <div className="intro_inner">
                    <h1 className="intro_title">There is no other platforms for you as like</h1>
                </div>
                <div className="icon_1">
                    <img id="bottom" src={playVideoIcon} alt="icon1"/>
                </div>
                <div className="try_now">
                    <a href="">
                    <img src={rounded_Rectangle} alt=""/> </a>
                    <h3 className="try_now_text">Try now</h3>
                </div>
                <div className="bottom_text">
                    <h3 className="bottom_text_1">* No need to add cards details</h3>
                </div>
            </div>
        </div>
    );
};


export default FirstPage;