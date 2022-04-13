import React from 'react';
import macbook from './images/macbook.png'

const FourthPage = () => {
    return (
        <div className="fourth">
            <div className="container4">
                <div className="leftSide">
                    <img src={macbook} alt=""/>
                </div>
                <div className="rightSide">
                    <h3 className="red_text">New design</h3>
                    <h1>Responsive design, just need your tab <span className="red">....</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
};

export default FourthPage;