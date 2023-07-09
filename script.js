'use strict';
const new_game=document.querySelector(".new_game");
const roll_dice=document.querySelector(".roll_dice");
const hold=document.querySelector(".hold");

const player1_score=document.querySelector(".player1_score");
const player2_score=document.querySelector(".player2_score");
const curr1=document.querySelector(".curr1");
const curr2=document.querySelector(".curr2");

let curr=curr1;

new_game.addEventListener("click",()=>{
    curr1.textContent="0";
    curr2.textContent="0";
    curr=curr1;
    player1_score.textContent="0";
    player2_score.textContent="0";
    document.querySelector(".left-side").style.backgroundColor="#D6A4B5";
    document.querySelector(".right-side").style.backgroundColor="#B26F8B";
    document.querySelector(".left-side").style.gap="7rem";
    document.querySelector(".right-side").style.gap="5rem";
    document.querySelector(".dominos").classList.add("hidden");
    document.querySelector(".winner").textContent="";
    role_play=player1_score;
    check=true;
});

let role_play=player1_score;
let dice_number;
let check=true; 

roll_dice.addEventListener("click",()=>{
    if(role_play.textContent<100){
    dice_number=Math.floor(Math.random()*6)+1;
    curr.textContent=String(Number(curr.textContent)+dice_number);
    document.querySelector(".dominos").src="die"+String(dice_number)+".svg";
    document.querySelector(".dominos").classList.remove("hidden");
    if(role_play.textContent>=100){
        if(curr==curr1) {
            document.querySelector(".left-side").style.backgroundColor="black";
            document.querySelector(".winner").textContent="player1 win !!!";
            document.querySelector(".left-side").style.color="white";
        }
        if(curr==curr2) {
            document.querySelector(".right-side").style.backgroundColor="black";
            document.querySelector(".winner").textContent="player2 win !!!";
            document.querySelector(".right-side").style.color="white";
        }
    }
    if(dice_number==1){
        if(role_play==player1_score) {
            role_play=player2_score;
            curr1.textContent="0";
            curr=curr2;
            document.querySelector(".left-sidee").style.gap="5rem";
            document.querySelector(".right-side").style.gap="7rem";
            document.querySelector(".left-side").style.backgroundColor="#B26F8B";
            document.querySelector(".right-side").style.backgroundColor="#D6A4B5";
        }
        else {
            role_play=player1_score;
            curr2.textContent="0";
            curr=curr1;
            document.querySelector(".left-sidee").style.gap="7rem";
            document.querySelector(".right-side").style.gap="5rem";
            document.querySelector(".left-side").style.backgroundColor="#D6A4B5";
            document.querySelector(".right-side").style.backgroundColor="#B26F8B";
        }
    }}
});

hold.addEventListener("click",()=>{
    if(role_play.textContent<100){
    role_play.textContent=String(Number(role_play.textContent)+Number(curr.textContent));
    curr.textContent="0";}
    if(role_play.textContent>=100 && check==true){
        if(curr==curr1) {
            document.querySelector(".left-side").style.backgroundColor="black";
            document.querySelector(".winner").textContent="player1 win !!!";
            document.querySelector(".left-sidee").style.color="white";
            
        }
        if(curr==curr2) {
            document.querySelector(".right-side").style.backgroundColor="black";
            document.querySelector(".winner").textContent="player2 win !!!";
            document.querySelector(".right-side").style.color="white";
        }
        check=false;
    }
    console.log(check);
    console.log(role_play==player1_score);
    if(check == true){
    if(role_play==player1_score ) {
        role_play=player2_score;
        curr1.textContent="0";
        curr=curr2;
        document.querySelector(".left-sidee").style.gap="4rem";
        document.querySelector(".right-side").style.gap="7rem";
        document.querySelector(".left-side").style.backgroundColor="#B26F8B";
        document.querySelector(".right-side").style.backgroundColor="#D6A4B5";
    }
    else  {
        role_play=player1_score;
        curr2.textContent="0";
        curr=curr1;
        document.querySelector(".left-sidee").style.gap="7rem";
        document.querySelector(".right-side").style.gap="5rem";
        document.querySelector(".left-side").style.backgroundColor="#D6A4B5";
        document.querySelector(".right-side").style.backgroundColor="#B26F8B";
    }}
    
});