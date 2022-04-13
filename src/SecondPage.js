import React from 'react';
import Rectangle22 from './images/Rectangle22.png'

const SecondPage = () => {
    return (
        <div className="second">
            <div className="main_about">
                <div className="container_left">
                    <h3 className="red_text">New design</h3>
                    <h1>There is no other platforms for you as like <span className="red">....</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="container_right">
                    <img src={Rectangle22} alt="rec"/>
                </div>
            </div>
        </div>
    );
};

export default SecondPage;