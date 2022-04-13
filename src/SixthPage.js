import React from 'react';
import browser from './images/browser.png'
import browser1 from './images/1.png'

const SixthPage = () => {
    return (
        <div className="sixth">
            <div className="container6">
                <div className="header6">
                    <h3 className="red_text">New features</h3>
                    <h1 className="header_h1_6">Some awesome features</h1>
                    <p className="text6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat.</p>
                </div>
                <div className="browser6">
                    <div className="bot_img"><img src={browser1} alt=""/></div>
                </div>
            </div>
        </div>
    );
};

export default SixthPage;