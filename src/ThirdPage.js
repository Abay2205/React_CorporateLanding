import React from 'react';
import picture from './images/picture.png'
import airplane from './images/airplane.png'
import bulb from './images/bulb.png'

const ThirdPage = () => {
    return (
        <div className="third">
            <div className="container_3">
                <div className="header3">
                    <h3 className="header_red_text">New features</h3>
                    <h1 className="header_text">Some awesome features</h1>
                </div>
                <div className="cards">
                    <div className="first_card">
                        <img src={picture} alt=""/>
                        <h3 className="card_text3">Some awesome features</h3>
                        <p className="card_text_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                    <div className="second_card">
                        <img src={airplane} alt=""/>
                        <h3 className="card_text3">Some awesome features</h3>
                        <p className="card_text_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                    <div className="third_card">
                        <img src={bulb} alt=""/>
                        <h3 className="card_text3">Some awesome features</h3>
                        <p className="card_text_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdPage;