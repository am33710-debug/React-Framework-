// Google logo + Input bar
import React from 'react';
import './css/Icon.css';

import googleLogo from './assets/google.png';
import micIcon from './assets/mic.png';
import aiMode from './assets/aimode.png';

export class Icon extends React.Component {
    render() {
        return (
            <div id="inputBar">
                <img src={googleLogo} alt="google" id="logo"/>

                <div id="icons">
                    <input type="text" placeholder="Your search here"/>
                    <img src={micIcon} alt="mic"/>
                    <img src={aiMode} alt="AiSearch"/>
                </div>
            </div>
        )
    }
}