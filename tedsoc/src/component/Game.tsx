import { useNavigate } from "react-router";
import './game.css';
import { useState } from "react";

import React from 'react';


const Game = () => {
    const navigate = useNavigate();
    const [start, setVisibility] = useState(0);


    const gotoHome = () => {
        navigate("/");
    };

    const gotoGame = () => {
        navigate("/game");
    };

    const gotoAbout = () => {
        navigate("/about");
    };



    const PrintMap = () => {
        var multi:string[][] = [
            ['W','W','W','W','W','W','W','W','W','W','W','W','W'],            
            ['W','O','O','O','O','O','O','O','O','O','O','O','W'],
            ['W','O','M','O','O','O','O','O','O','W','W','W','W'],
            ['W','O','O','O','O','O','O','O','O','O','O','O','W'],
            ['W','O','O','O','O','O','O','O','O','O','O','O','W'],
            ['W','O','O','O','O','O','O','O','O','O','O','O','W'],
            ['W','O','O','O','O','O','O','O','O','O','O','O','W'],
            ['W','O','O','O','O','O','P','O','O','O','O','O','W'],
            ['W','O','O','O','O','O','O','O','O','O','O','O','W'],
            ['W','O','O','O','O','O','O','O','O','O','O','O','W'],
            ['W','O','O','O','O','O','O','O','O','W','O','O','W'],
            ['W','O','O','O','O','O','O','O','O','W','O','O','W'],
            ['W','O','O','O','O','O','O','W','O','W','W','W','W'],
            ['W','O','O','O','O','O','O','W','O','O','O','O','W'],
            ['W','W','W','W','W','W','W','W','W','W','W','W','W']
        ];
        var mapa="<div id='gra'><br/><br/>";
        var buffor='';

        var wall = 'https://cdnb.artstation.com/p/assets/images/images/035/877/165/large/gregory-ligman-brick-wall-tile.jpg?1616129544';
        var floor = 'https://images.squarespace-cdn.com/content/v1/55fc0004e4b069a519961e2d/1442590746571-RPGKIXWGOO671REUNMCB/image-asset.gif?format=300w';
        var player = 'https://raw.githubusercontent.com/HansPanzer2137/TedSokoban/master/tedsoc/src/component/static/Bez%20nazwy.png';
        var mail = 'https://raw.githubusercontent.com/HansPanzer2137/TedSokoban/master/tedsoc/src/component/static/nebro.png';

        (document.getElementById("app2137") as HTMLInputElement).innerHTML = "";
        
        for(let i=0; i<multi.length; i++){
            for(let j=0; j<multi[i].length; j++){
                switch (multi[i][j]){
                    case 'W': {buffor = "<img id='nebro' src='"+wall+"' alt='nigga'></img>"; console.log("ściana");break;}
                    case 'O': {buffor = "<img id='nebro' src='"+floor+"' alt='nigga'></img>"; console.log("podłoga");break;}
                    case 'P': {buffor = "<img id='nebro' src='"+player+"' alt='nigga'></img>"; console.log("gracz");break;}
                    case 'M': {buffor = "<img id='nebro' src='"+mail+"' alt='nigga'></img>"; console.log("paczka");break;}
                }
                mapa = mapa+buffor;
            }
            mapa = mapa+"<br/>"
        };
        mapa = mapa + "</div>";
        
        (document.getElementById("app2137") as HTMLInputElement).innerHTML = mapa;
    }


    const Game = () => {
        
        PrintMap();
        

    };


    const startGameplay = () => {
        console.log("startGameplay");
        (document.getElementById("app2137") as HTMLInputElement).innerHTML = "";
        Game();

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

    <div id="app2137">
        <br/><br/>
        <img id="teddy" src="https://i.kym-cdn.com/photos/images/masonry/002/240/989/cd8.jpg" alt="nibber"></img><br></br>
        <button id="nibber" onClick={startGameplay}>START TROLLAGE</button>
        <script src="src/game/game.tsx" ></script>
    </div>
    </div>
    );
}

export default Game;