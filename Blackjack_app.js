let firstCard, secondCard;
let cards=[];
let sum=0;
let hasBlackjack=false;
let isAlive = false;
let massage="";
let massageEl=document.getElementById("massage-el");
let sumEl=document.querySelector("#sum-el");
let cardEl=document.querySelector("#cards-el");
let player ={
    name:"Aditya",
    chip:142
}
let playerEl=document.querySelector("#player-el");
playerEl.textContent= player.name +": $"+ player.chip;

function getRandomCard(){
    let newNum= Math.floor(Math.random()*13)+1;
    if(newNum==1){
        return 11;
    }
    else if(newNum==11||newNum==12||newNum==13){
        return 10;
    }
    else
    return newNum;
}


function startGame(){
    isAlive=true;
    firstCard= getRandomCard();
    secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum= firstCard+secondCard;

    renderGame();
}
//ALTERNATE METHOD TO CHECK NEWCARD() FUNCTION
// function check(){
//     if(hasBlackjack==false&& isAlive==true){
//         newcard();
//     }
// }


function renderGame(){
    cardEl.textContent="Cards: ";
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+= cards[i]+" ";
    }
    sumEl.textContent="Sum: "+sum;


    if(sum<21){
        massage="Do you want to draw more card?";
        massageEl.textContent=massage;
    }
    else  if(sum===21){
        massage="You have got the blackjack!!";
        hasBlackjack=true;
        massageEl.textContent=massage;
    }
    else{
        massage="You lost the game";
        isAlive=false;
        massageEl.textContent=massage;
    }
    console.log(massage);
}
function newcard(){
    // console.log("Drawing a new card from the deck");
    if(hasBlackjack==false&& isAlive==true){
        let thirdcard=getRandomCard();
        cards.push(thirdcard);
        console.log(cards);
        sum+=thirdcard;
        renderGame();
    
    }
}
