import { useNavigate} from "react-router";
import React from 'react';
import './about.css';

const About = () => {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate("/");
    }

    const gotoGame = () => {
        navigate("/game");
    }

    const gotoAbout = () => {
        navigate("/about");
    }

    return (
        <div className="App">
            <div id="bar">
                <div className="logo">
                    <button onClick={gotoHome}>Home</button>
                    <button onClick={gotoGame}>Game</button>
                    <button onClick={gotoAbout}>About</button>
                </div>
            </div>
            <div id="main">
                <div id="about">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h1>About</h1>
                <h3>Author: Hubert Topolski</h3>
                </div>
            </div>
        </div>
    );
}

export default About;
