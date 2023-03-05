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

    var multi:string[][] = [
        ['W','W','W','W','W','W','W','W','W','W','W','W','W'],            
        ['W','O','O','O','O','O','O','O','O','O','O','T','W'],
        ['W','O','M','O','O','O','O','O','O','W','W','W','W'],
        ['W','O','O','O','O','O','O','O','O','O','O','O','W'],
        ['W','O','M','O','O','O','O','O','O','O','O','O','W'],
        ['W','O','O','O','M','O','O','O','O','O','O','O','W'],
        ['W','O','O','O','O','O','O','O','O','O','O','O','W'],
        ['W','W','W','W','O','O','P','O','O','O','O','O','W'],
        ['W','T','O','W','O','O','O','O','O','O','O','O','W'],
        ['W','O','O','W','O','O','O','O','O','O','O','O','W'],
        ['W','O','O','O','O','O','O','O','O','W','O','O','W'],
        ['W','O','O','O','O','O','M','O','O','W','O','O','W'],
        ['W','O','O','O','O','O','W','O','O','W','W','W','W'],
        ['W','T','O','O','O','O','W','O','O','O','O','T','W'],
        ['W','W','W','W','W','W','W','W','W','W','W','W','W']
    ];

    var player_posX = 7;
    var player_posY = 6;
    var player_posX_old = 7;
    var player_posY_old = 6;


    var mail_posX = 2;
    var mail_posY = 2;
    var mail_posX_old = 2;
    var mail_posY_old = 2;

    var mail_posX2 = 4;
    var mail_posY2 = 2;
    var mail_posX2_old = 4;
    var mail_posY2_old = 2;

    var mail_posX3 = 5;
    var mail_posY3 = 4;
    var mail_posX3_old = 5;
    var mail_posY3_old = 4;

    var mail_posX4 = 11;
    var mail_posY4 = 6;
    var mail_posX4_old = 11;
    var mail_posY4_old = 6;

    var mail_posXBuffor = 0;
    var mail_posYBuffor = 0;
    var mail_posX_oldBuffor = 0;
    var mail_posY_oldBuffor = 0;
    var geted = 0;


    var punkty=0;


    const PrintMap = () => {
        
        var mapa="<div id='gra'><br/><br/><h1>Punkty: "+punkty+"</h1><br/><br/>";
        var buffor='';

        var wall = 'https://cdnb.artstation.com/p/assets/images/images/035/877/165/large/gregory-ligman-brick-wall-tile.jpg?1616129544';
        var floor = 'https://images.squarespace-cdn.com/content/v1/55fc0004e4b069a519961e2d/1442590746571-RPGKIXWGOO671REUNMCB/image-asset.gif?format=300w';
        var player = 'https://raw.githubusercontent.com/HansPanzer2137/TedSokoban/master/tedsoc/src/component/static/Bez%20nazwy.png';
        var mail = 'https://raw.githubusercontent.com/HansPanzer2137/TedSokoban/master/tedsoc/src/component/static/nebro.png';
        var target= 'https://dzieje.pl/sites/default/files/styles/open_article_750x0_/public/202007/uj.jpg?itok=FY-nRUOU';
        var destroyed  = 'https://d-art.ppstatic.pl/kadry/k/r/1/09/7f/5614e4cb3197a_o_full.jpg';

        (document.getElementById("app2137") as HTMLInputElement).innerHTML = "";
        
        for(let i=0; i<multi.length; i++){
            for(let j=0; j<multi[i].length; j++){
                switch (multi[i][j]){
                    case 'W': {buffor = "<img id='nebro' src='"+wall+"' alt='nigga'></img>"; break;}
                    case 'O': {buffor = "<img id='nebro' src='"+floor+"' alt='nigga'></img>"; break;}
                    case 'P': {buffor = "<img id='nebro' src='"+player+"' alt='nigga'></img>";break;}
                    case 'M': {buffor = "<img id='nebro' src='"+mail+"' alt='nigga'></img>";break;}
                    case 'T': {buffor = "<img id='nebro' src='"+target+"' alt='nigga'></img>";break;}
                    case 'D': {buffor = "<img id='nebro' src='"+destroyed+"' alt='nigga'></img>";break;}
                }
                mapa = mapa+buffor;
            }
            mapa = mapa+"<br/>"
        };
        mapa = mapa + "</div>";
        
        (document.getElementById("app2137") as HTMLInputElement).innerHTML = mapa;
    }


    function changePlace() {
        //check if position to move is a wall or package
        switch(multi[player_posX][player_posY]){
            case 'W': {console.log('Wall detected, do nothing');player_posX=player_posX_old;player_posY=player_posY_old;break;}
            case 'M': {
                console.log('moving package Teddy');
                console.log('package1 posx:'+mail_posX+'posy:'+mail_posY);
                console.log('package2 posx:'+mail_posX2+'posy:'+mail_posY2);
                console.log('package3 posx:'+mail_posX3+'posy:'+mail_posY3);
                console.log('package4 posx:'+mail_posX4+'posy:'+mail_posY4);
                if(player_posX_old == player_posX+1){
                    switch(player_posX && player_posY){
                        case (mail_posX && mail_posY):     {console.log("Getting package1");mail_posXBuffor=mail_posX;mail_posYBuffor=mail_posY;mail_posX_oldBuffor=mail_posX_old;mail_posY_oldBuffor=mail_posY_old;geted=1;break;}
                        case (mail_posX2 && mail_posY2):    {console.log("Getting package2");mail_posXBuffor=mail_posX2;mail_posYBuffor=mail_posY2;mail_posX_oldBuffor=mail_posX2_old;mail_posY_oldBuffor=mail_posY2_old;geted=2;break;}
                        case (mail_posX3 && mail_posY3):    {console.log("Getting package3");mail_posXBuffor=mail_posX3;mail_posYBuffor=mail_posY3;mail_posX_oldBuffor=mail_posX3_old;mail_posY_oldBuffor=mail_posY3_old;geted=3;break;}
                        case (mail_posX4 && mail_posY4):    {console.log("Getting package4");mail_posXBuffor=mail_posX4;mail_posYBuffor=mail_posY4;mail_posX_oldBuffor=mail_posX4_old;mail_posY_oldBuffor=mail_posY4_old;geted=4;break;}
                    }
                    if(multi[mail_posXBuffor-1][mail_posYBuffor] == "W"){break;}
                    if(multi[mail_posXBuffor-1][mail_posYBuffor] == "T"){
                        console.log("Destroying with pipe bomb");
                        punkty=punkty+10; 
                        mail_posXBuffor = mail_posXBuffor-1;
                        mail_posYBuffor = mail_posYBuffor;
                        console.log('mail_posXBuffor'+mail_posXBuffor+' mail_posYBuffor'+mail_posYBuffor);
                        console.log("Bum bum");
                        multi[mail_posXBuffor][mail_posYBuffor] = "D";
                        multi[mail_posX_oldBuffor][mail_posY_oldBuffor] = "O";

                        console.log('player_posX: '+player_posX+' player_posY: '+player_posY);
                        multi[player_posX_old][player_posY_old] = 'O';
                        multi[player_posX][player_posY] = 'P';
                        player_posX_old = player_posX;
                        player_posY_old = player_posY;

                        PrintMap();
                        switch(geted){
                            case 1: {mail_posX=mail_posXBuffor;mail_posY=mail_posYBuffor;mail_posX_old=mail_posX_oldBuffor;mail_posY_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 2: {mail_posX2=mail_posXBuffor;mail_posY2=mail_posYBuffor;mail_posX2_old=mail_posX_oldBuffor;mail_posY2_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 3: {mail_posX3=mail_posXBuffor;mail_posY3=mail_posYBuffor;mail_posX3_old=mail_posX_oldBuffor;mail_posY3_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 4: {mail_posX4=mail_posXBuffor;mail_posY4=mail_posYBuffor;mail_posX4_old=mail_posX_oldBuffor;mail_posY4_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                        }
                        break;
                    }
                    if(multi[mail_posXBuffor-1][mail_posYBuffor] == "O"){
                        mail_posXBuffor = mail_posXBuffor-1;
                        mail_posYBuffor = mail_posYBuffor;
                        console.log('mail_posXBuffor'+mail_posXBuffor+' mail_posYBuffor'+mail_posYBuffor);
                        console.log('mail_posXBuffor old'+mail_posX_oldBuffor+' mail_posYBuffor old'+mail_posY_oldBuffor);
                        multi[mail_posXBuffor][mail_posYBuffor] = "M";
                        multi[mail_posX_oldBuffor][mail_posY_oldBuffor] = "O";
                        console.log('player_posX: '+player_posX+' player_posY: '+player_posY);
                        multi[player_posX_old][player_posY_old] = 'O';
                        multi[player_posX][player_posY] = 'P';
                        player_posX_old = player_posX;
                        player_posY_old = player_posY;
                        PrintMap();
                        switch(geted){
                            case 1: {mail_posX=mail_posXBuffor;mail_posY=mail_posYBuffor;mail_posX_old=mail_posX_oldBuffor;mail_posY_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 2: {mail_posX2=mail_posXBuffor;mail_posY2=mail_posYBuffor;mail_posX2_old=mail_posX_oldBuffor;mail_posY2_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 3: {mail_posX3=mail_posXBuffor;mail_posY3=mail_posYBuffor;mail_posX3_old=mail_posX_oldBuffor;mail_posY3_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 4: {mail_posX4=mail_posXBuffor;mail_posY4=mail_posYBuffor;mail_posX4_old=mail_posX_oldBuffor;mail_posY4_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                        }
                        break;
                    }
                }




                if(player_posX_old == player_posX-1){
                    switch(player_posX && player_posY){
                        case (mail_posX && mail_posY):     {console.log("Getting package1");mail_posXBuffor=mail_posX;mail_posYBuffor=mail_posY;mail_posX_oldBuffor=mail_posX_old;mail_posY_oldBuffor=mail_posY_old;geted=1;break;}
                        case (mail_posX2 && mail_posY2):    {console.log("Getting package2");mail_posXBuffor=mail_posX2;mail_posYBuffor=mail_posY2;mail_posX_oldBuffor=mail_posX2_old;mail_posY_oldBuffor=mail_posY2_old;geted=2;break;}
                        case (mail_posX3 && mail_posY3):    {console.log("Getting package3");mail_posXBuffor=mail_posX3;mail_posYBuffor=mail_posY3;mail_posX_oldBuffor=mail_posX3_old;mail_posY_oldBuffor=mail_posY3_old;geted=3;break;}
                        case (mail_posX4 && mail_posY4):    {console.log("Getting package4");mail_posXBuffor=mail_posX4;mail_posYBuffor=mail_posY4;mail_posX_oldBuffor=mail_posX4_old;mail_posY_oldBuffor=mail_posY4_old;geted=4;break;}
                    }
                    if(multi[mail_posXBuffor+1][mail_posYBuffor] == "W"){break;}
                    if(multi[mail_posXBuffor+1][mail_posYBuffor] == "T"){
                        console.log("Destroying with pipe bomb");
                        punkty=punkty+10; 
                        mail_posXBuffor = mail_posXBuffor+1;
                        mail_posYBuffor = mail_posYBuffor;
                        console.log('mail_posXBuffor'+mail_posXBuffor+' mail_posYBuffor'+mail_posYBuffor);
                        multi[mail_posXBuffor][mail_posYBuffor] = "D";
                        multi[mail_posX_oldBuffor][mail_posY_oldBuffor] = "O";

                        console.log('player_posX: '+player_posX+' player_posY: '+player_posY);
                        multi[player_posX_old][player_posY_old] = 'O';
                        multi[player_posX][player_posY] = 'P';
                        player_posX_old = player_posX;
                        player_posY_old = player_posY;

                        PrintMap();
                        switch(geted){
                            case 1: {mail_posX=mail_posXBuffor;mail_posY=mail_posYBuffor;mail_posX_old=mail_posX_oldBuffor;mail_posY_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 2: {mail_posX2=mail_posXBuffor;mail_posY2=mail_posYBuffor;mail_posX2_old=mail_posX_oldBuffor;mail_posY2_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 3: {mail_posX3=mail_posXBuffor;mail_posY3=mail_posYBuffor;mail_posX3_old=mail_posX_oldBuffor;mail_posY3_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 4: {mail_posX4=mail_posXBuffor;mail_posY4=mail_posYBuffor;mail_posX4_old=mail_posX_oldBuffor;mail_posY4_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                        }
                        break;
                    }
                    if(multi[mail_posXBuffor+1][mail_posYBuffor] == "O"){
                        mail_posXBuffor = mail_posXBuffor+1;
                        mail_posYBuffor = mail_posYBuffor;
                        console.log('mail_posXBuffor'+mail_posXBuffor+' mail_posYBuffor'+mail_posYBuffor);
                        multi[mail_posXBuffor][mail_posYBuffor] = "M";
                        multi[mail_posX_oldBuffor][mail_posY_oldBuffor] = "O";
                        console.log('player_posX: '+player_posX+' player_posY: '+player_posY);
                        multi[player_posX_old][player_posY_old] = 'O';
                        multi[player_posX][player_posY] = 'P';
                        player_posX_old = player_posX;
                        player_posY_old = player_posY;
                        PrintMap();
                        switch(geted){
                            case 1: {mail_posX=mail_posXBuffor;mail_posY=mail_posYBuffor;mail_posX_old=mail_posX_oldBuffor;mail_posY_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 2: {mail_posX2=mail_posXBuffor;mail_posY2=mail_posYBuffor;mail_posX2_old=mail_posX_oldBuffor;mail_posY2_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 3: {mail_posX3=mail_posXBuffor;mail_posY3=mail_posYBuffor;mail_posX3_old=mail_posX_oldBuffor;mail_posY3_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 4: {mail_posX4=mail_posXBuffor;mail_posY4=mail_posYBuffor;mail_posX4_old=mail_posX_oldBuffor;mail_posY4_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                        }
                        break;
                    }
                }
                if(player_posY_old == player_posY+1){
                    switch(player_posY && player_posX){
                        case (mail_posY && mail_posX):     {console.log("Getting package1");mail_posXBuffor=mail_posX;mail_posYBuffor=mail_posY;mail_posX_oldBuffor=mail_posX_old;mail_posY_oldBuffor=mail_posY_old;geted=1;break;}
                        case (mail_posY2 && mail_posX2):    {console.log("Getting package2");mail_posXBuffor=mail_posX2;mail_posYBuffor=mail_posY2;mail_posX_oldBuffor=mail_posX2_old;mail_posY_oldBuffor=mail_posY2_old;geted=2;break;}
                        case (mail_posY3 && mail_posX3):    {console.log("Getting package3");mail_posXBuffor=mail_posX3;mail_posYBuffor=mail_posY3;mail_posX_oldBuffor=mail_posX3_old;mail_posY_oldBuffor=mail_posY3_old;geted=3;break;}
                        case (mail_posY4 && mail_posX4):    {console.log("Getting package4");mail_posXBuffor=mail_posX4;mail_posYBuffor=mail_posY4;mail_posX_oldBuffor=mail_posX4_old;mail_posY_oldBuffor=mail_posY4_old;geted=4;break;}
                    }
                    if(multi[mail_posXBuffor][mail_posYBuffor-1] == "W"){break;}
                    if(multi[mail_posXBuffor][mail_posYBuffor-1] == "T"){
                        console.log("Destroying with pipe bomb");
                        punkty=punkty+10; 
                        mail_posXBuffor = mail_posXBuffor;
                        mail_posYBuffor = mail_posYBuffor-1;
                        console.log('mail_posXBuffor'+mail_posXBuffor+' mail_posYBuffor'+mail_posYBuffor);
                        multi[mail_posXBuffor][mail_posYBuffor] = "D";
                        multi[mail_posX_oldBuffor][mail_posY_oldBuffor] = "O";

                        console.log('player_posX: '+player_posX+' player_posY: '+player_posY);
                        multi[player_posX_old][player_posY_old] = 'O';
                        multi[player_posX][player_posY] = 'P';
                        player_posX_old = player_posX;
                        player_posY_old = player_posY;

                        PrintMap();
                        switch(geted){
                            case 1: {mail_posX=mail_posXBuffor;mail_posY=mail_posYBuffor;mail_posX_old=mail_posX_oldBuffor;mail_posY_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 2: {mail_posX2=mail_posXBuffor;mail_posY2=mail_posYBuffor;mail_posX2_old=mail_posX_oldBuffor;mail_posY2_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 3: {mail_posX3=mail_posXBuffor;mail_posY3=mail_posYBuffor;mail_posX3_old=mail_posX_oldBuffor;mail_posY3_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 4: {mail_posX4=mail_posXBuffor;mail_posY4=mail_posYBuffor;mail_posX4_old=mail_posX_oldBuffor;mail_posY4_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                        }
                        break;
                    }
                    if(multi[mail_posXBuffor][mail_posYBuffor-1] == "O"){
                        mail_posXBuffor = mail_posXBuffor;
                        mail_posYBuffor = mail_posYBuffor-1;
                        console.log('mail_posXBuffor'+mail_posXBuffor+' mail_posYBuffor'+mail_posYBuffor);
                        multi[mail_posXBuffor][mail_posYBuffor] = "M";
                        multi[mail_posX_oldBuffor][mail_posY_oldBuffor] = "O";
                        console.log('player_posX: '+player_posX+' player_posY: '+player_posY);
                        multi[player_posX_old][player_posY_old] = 'O';
                        multi[player_posX][player_posY] = 'P';
                        player_posX_old = player_posX;
                        player_posY_old = player_posY;
                        PrintMap();
                        switch(geted){
                            case 1: {mail_posX=mail_posXBuffor;mail_posY=mail_posYBuffor;mail_posX_old=mail_posX_oldBuffor;mail_posY_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 2: {mail_posX2=mail_posXBuffor;mail_posY2=mail_posYBuffor;mail_posX2_old=mail_posX_oldBuffor;mail_posY2_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 3: {mail_posX3=mail_posXBuffor;mail_posY3=mail_posYBuffor;mail_posX3_old=mail_posX_oldBuffor;mail_posY3_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 4: {mail_posX4=mail_posXBuffor;mail_posY4=mail_posYBuffor;mail_posX4_old=mail_posX_oldBuffor;mail_posY4_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                        }
                        break;
                    }
                }

                if(player_posY_old == player_posY-1){
                    switch((player_posY) && (player_posX)){
                        case ((mail_posY) && (mail_posX)):     {console.log("Getting package1");mail_posXBuffor=mail_posX;mail_posYBuffor=mail_posY;mail_posX_oldBuffor=mail_posX_old;mail_posY_oldBuffor=mail_posY_old;geted=1;break;}
                        case ((mail_posY2) && (mail_posX2)):    {console.log("Getting package2");mail_posXBuffor=mail_posX2;mail_posYBuffor=mail_posY2;mail_posX_oldBuffor=mail_posX2_old;mail_posY_oldBuffor=mail_posY2_old;geted=2;break;}
                        case ((mail_posY3) && (mail_posX3)):    {console.log("Getting package3");mail_posXBuffor=mail_posX3;mail_posYBuffor=mail_posY3;mail_posX_oldBuffor=mail_posX3_old;mail_posY_oldBuffor=mail_posY3_old;geted=3;break;}
                        case ((mail_posY4) && (mail_posX4)):    {console.log("Getting package4");mail_posXBuffor=mail_posX4;mail_posYBuffor=mail_posY4;mail_posX_oldBuffor=mail_posX4_old;mail_posY_oldBuffor=mail_posY4_old;geted=4;break;}
                    }
                    if(multi[mail_posXBuffor][mail_posYBuffor+1] == "W"){break;}
                    if(multi[mail_posXBuffor][mail_posYBuffor+1] == "T"){
                        console.log("Destroying with pipe bomb");
                        punkty=punkty+10; 
                        mail_posXBuffor = mail_posXBuffor;
                        mail_posYBuffor = mail_posYBuffor+1;
                        console.log('mail_posXBuffor'+mail_posXBuffor+' mail_posYBuffor'+mail_posYBuffor);
                        multi[mail_posXBuffor][mail_posYBuffor] = "D";
                        multi[mail_posX_oldBuffor][mail_posY_oldBuffor] = "O";

                        console.log('player_posX: '+player_posX+' player_posY: '+player_posY);
                        multi[player_posX_old][player_posY_old] = 'O';
                        multi[player_posX][player_posY] = 'P';
                        player_posX_old = player_posX;
                        player_posY_old = player_posY;

                        PrintMap();
                        switch(geted){
                            case 1: {mail_posX=mail_posXBuffor;mail_posY=mail_posYBuffor;mail_posX_old=mail_posX_oldBuffor;mail_posY_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 2: {mail_posX2=mail_posXBuffor;mail_posY2=mail_posYBuffor;mail_posX2_old=mail_posX_oldBuffor;mail_posY2_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 3: {mail_posX3=mail_posXBuffor;mail_posY3=mail_posYBuffor;mail_posX3_old=mail_posX_oldBuffor;mail_posY3_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 4: {mail_posX4=mail_posXBuffor;mail_posY4=mail_posYBuffor;mail_posX4_old=mail_posX_oldBuffor;mail_posY4_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                        }
                        break;
                    }
                    if(multi[mail_posXBuffor][mail_posYBuffor+1] == "O"){
                        mail_posXBuffor = mail_posXBuffor;
                        mail_posYBuffor = mail_posYBuffor+1;
                        console.log('mail_posXBuffor'+mail_posXBuffor+' mail_posYBuffor'+mail_posYBuffor);
                        multi[mail_posXBuffor][mail_posYBuffor] = "M";
                        multi[mail_posX_oldBuffor][mail_posY_oldBuffor] = "O";
                        console.log('player_posX: '+player_posX+' player_posY: '+player_posY);
                        multi[player_posX_old][player_posY_old] = 'O';
                        multi[player_posX][player_posY] = 'P';
                        player_posX_old = player_posX;
                        player_posY_old = player_posY;
                        PrintMap();
                        switch(geted){
                            case 1: {mail_posX=mail_posXBuffor;mail_posY=mail_posYBuffor;mail_posX_old=mail_posX_oldBuffor;mail_posY_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 2: {mail_posX2=mail_posXBuffor;mail_posY2=mail_posYBuffor;mail_posX2_old=mail_posX_oldBuffor;mail_posY2_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 3: {mail_posX3=mail_posXBuffor;mail_posY3=mail_posYBuffor;mail_posX3_old=mail_posX_oldBuffor;mail_posY3_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                            case 4: {mail_posX4=mail_posXBuffor;mail_posY4=mail_posYBuffor;mail_posX4_old=mail_posX_oldBuffor;mail_posY4_old=mail_posY_oldBuffor;mail_posXBuffor=0;mail_posYBuffor=0;mail_posX_oldBuffor=0;mail_posY_oldBuffor=0;break;}
                        }
                        break;
                    }
                }
                break;
            }
            case 'O': {
                console.log('moving player');
                console.log('player_posX: '+player_posX+' player_posY: '+player_posY);
                multi[player_posX_old][player_posY_old] = 'O';
                multi[player_posX][player_posY] = 'P';
                player_posX_old = player_posX;
                player_posY_old = player_posY;
                PrintMap();
            }
        }
        
    }



    function keyEvent() {
        document.addEventListener('keydown', (event) => {
            var name = event.key;
            var code = event.code;

            console.log('Key pressed '+name+'. Key code '+code+'.');
            console.log('package1 posx: '+mail_posX+'   posy:'+mail_posY);
            console.log('package2 posx: '+mail_posX2+'  posy:'+mail_posY2);
            console.log('package3 posx: '+mail_posX3+'  posy:'+mail_posY3);
            console.log('package4 posx: '+mail_posX4+'  posy:'+mail_posY4);

            switch(code){
                case 'KeyW': {player_posX=player_posX-1;changePlace();break;}
                case 'KeyA': {player_posY=player_posY-1;changePlace();break;}
                case 'KeyS': {player_posX=player_posX+1;changePlace();break;}
                case 'KeyD': {player_posY=player_posY+1;changePlace();break;}
            }

        }, false);
    }

    const Game = () => {
        
        PrintMap();
        keyEvent();

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