import { useNavigate } from "react-router";
import React from 'react';
import './home.css';

const Home = () => {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate("/");
    };

    const gotoGame = () => {
        navigate("/game");
    };

    const gotoAbout = () => {
        navigate("/about");
    };


    return (
        <div className="App">
    <div id="bar">
    <div className="logo">
        <button onClick={gotoHome}>Home</button>
        <button onClick={gotoGame}>Game</button>
        <button onClick={gotoAbout}>About</button>
        </div>
    </div>
    <div id="start_left" >
        <img src="https://i.kym-cdn.com/photos/images/facebook/002/223/174/391.jpg"></img>
    </div>
    <div id="start_right">
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1>Ted Kaczynski Sokoban</h1>
        <p>Sokoban Game with Ted Kaczynski. Move bombs to make your plan</p>
        <p>Be the best postman on the whole world!</p>
        </div>
    </div>
    
    );
}

export default Home;