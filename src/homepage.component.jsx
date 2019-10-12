import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Desktops</h1>
                    <span className="title">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Laptops</h1>
                    <span className="title">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Smartphones</h1>
                    <span className="title">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Home electronics</h1>
                    <span className="title">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Appliances</h1>
                    <span className="title">SHOP NOW</span>
                </div>
            </div>            
        </div>
    </div>
)

export default HomePage;

