
var randomCardsSrc,card,cardPair;
var position=[1,2,3,4,5,6,7,8,9,10,11,12];


init();

function init(){ 
    cardsInGame=[];
    var clickableCards=[];
    var clickCard=0;
    randomPositions = shuffle([1,2,3,4,5,6,7,8,9,10,11,12]);
    for(var i=0;i<6;i++){

    //random card
    randomCardsSrc=generateRandomCard();
    cardsInGame.push(randomCardsSrc);

    }
    for(var i=1;i<=12;i++){
    clickCard=document.getElementById("card-"+i);
    clickableCards.push(clickCard);
    }
    addTheListeners(clickableCards);
}


//create a new card
function generateRandomCard(){
    var randomNum = Math.floor(Math.random()*13)+1;
    //A=1 J=11 Q=12 K=13
    switch(randomNum){
        case 1: randomNum="A";
                break;
        case 11:randomNum="J";
                break;
        case 12:randomNum="Q";
                break;
        case 13:randomNum="K";
                break;
    }

    var randomSymb= Math.floor(Math.random()*4)+1;
    //1=C 2=D 3=H 4=S
    switch(randomSymb){
        case 1:randomSymb="C";
                break;
        case 2:randomSymb="D";
                break;
        case 3:randomSymb="H";
                break;
        case 4:randomSymb="S";
                break;
    }
    randomCardsSrc=randomNum+randomSymb;

    if(cardsInGame.includes(randomCardsSrc)){
        generateRandomCard();
    }

    return randomCardsSrc;
    
}

 //Shuffle the 12 positions
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

//==========================================
//add for each card an eventListeners
function addTheListeners(clickableCards){

clickableCards[0].addEventListener("click",function(){
    let pos=randomPositions.indexOf(1);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
        cardPos2=pos;
    }else{
        cardPos=pos;
    }
    if(clickableCards[0].src.includes("/style/backs/gray_back.png")){
        clickableCards[0].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(1);
    findPairs(clickableCards);
});
clickableCards[1].addEventListener("click",function(){
    let pos=randomPositions.indexOf(2);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
    }else{
        cardPos=pos;
    }

    if(clickableCards[1].src.includes("/style/backs/gray_back.png")){
        clickableCards[1].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(2);
    findPairs(clickableCards);
});
clickableCards[2].addEventListener("click",function(){
    let pos=randomPositions.indexOf(3);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
    }else{
        cardPos=pos;
    }

    if(clickableCards[2].src.includes("/style/backs/gray_back.png")){
        clickableCards[2].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(3);
    findPairs(clickableCards);
});
clickableCards[3].addEventListener("click",function(){
    let pos=randomPositions.indexOf(4);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
    }else{
        cardPos=pos;
    }

    if(clickableCards[3].src.includes("/style/backs/gray_back.png")){
        clickableCards[3].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(4);
    findPairs(clickableCards);
});
clickableCards[4].addEventListener("click",function(){
    let pos=randomPositions.indexOf(5);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
    }else{
        cardPos=pos;
    }

    if(clickableCards[4].src.includes("/style/backs/gray_back.png")){
        clickableCards[4].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(5);
    findPairs(clickableCards);
});
clickableCards[5].addEventListener("click",function(){
    let pos=randomPositions.indexOf(6);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
    }else{
        cardPos=pos;
    }

    if(clickableCards[5].src.includes("/style/backs/gray_back.png")){
        clickableCards[5].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(6);
    findPairs(clickableCards);
});
clickableCards[6].addEventListener("click",function(){
    let pos=randomPositions.indexOf(7);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
    }else{
        cardPos=pos;
    }

    if(clickableCards[6].src.includes("/style/backs/gray_back.png")){
        clickableCards[6].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(7);
    findPairs(clickableCards);
});
clickableCards[7].addEventListener("click",function(){
    let pos=randomPositions.indexOf(8);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
    }else{
        cardPos=pos;
    }

    if(clickableCards[7].src.includes("/style/backs/gray_back.png")){
        clickableCards[7].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(8);
    findPairs(clickableCards);
});
clickableCards[8].addEventListener("click",function(){
    let pos=randomPositions.indexOf(9);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
    }else{
        cardPos=pos;
    }

    if(clickableCards[8].src.includes("/style/backs/gray_back.png")){
        clickableCards[8].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(9);
    findPairs(clickableCards);
});
clickableCards[9].addEventListener("click",function(){
    let pos=randomPositions.indexOf(10);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
    }else{
        cardPos=pos;
    }

    if(clickableCards[9].src.includes("/style/backs/gray_back.png")){
        clickableCards[9].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(10);
    findPairs(clickableCards);
});
clickableCards[10].addEventListener("click",function(){
    let pos=randomPositions.indexOf(11);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
    }else{
        cardPos=pos;
    }

    if(clickableCards[10].src.includes("/style/backs/gray_back.png")){
        clickableCards[10].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(11);
    findPairs(clickableCards);
});
clickableCards[11].addEventListener("click",function(){
    let pos=randomPositions.indexOf(12);
    let cardPos;
    if(pos>=6){
        cardPos=pos-6;
        cardPos2=pos;
    }else{
        cardPos=pos;
    }
    if(clickableCards[11].src.includes("/style/backs/gray_back.png")){
        clickableCards[11].src="./style/PNG/"+cardsInGame[cardPos]+".png";
    }
    pairs.push(cardsInGame[cardPos]);
    pairsPos.push(12);
    findPairs(clickableCards);
});


}


//=====================================================================================
//find pairs
var pairs=[];
var pairsPos=[];
var pairsFound=0;
function findPairs(clickableCards){

    var firstCard=clickableCards[pairsPos[0]-1];
    var secondCard=clickableCards[pairsPos[1]-1];

    if(pairs.length===2){
        if(pairs[0]===pairs[1] && firstCard!==secondCard){
            setTimeout((firstCard,secondCard)=>{
                firstCard.classList.toggle("visibility");
                secondCard.classList.toggle("visibility");
                pairsFound++;
                function changePairsFound(){
                    document.querySelector(".pairs").innerHTML="<h4>Pairs Found:"+pairsFound+"</h4>";
                }
                changePairsFound(pairsFound);
                if(pairsFound===6){
                    document.querySelector(".btn").textContent="Play Again!";
                    document.querySelector(".row-2").innerHTML="<h2>Congratulations</h4>";
                    document.querySelector(".row-2").classList.add("row-2-style");
                }
            },300,firstCard,secondCard);
        }else{
            setTimeout((firstCard,secondCard)=>{
                firstCard.src="./style/backs/gray_back.png";
                secondCard.src="./style/backs/gray_back.png";
            },300,firstCard,secondCard);
            
        }
        pairs=[];
        pairsPos=[];
    }

}

//======================================================================================

//Count clicks
var clicks=0;
var allCardClicked=document.querySelectorAll(".img-fluid");
var clicksHTML=document.querySelector(".clicks");
allCardClicked.forEach(function(el){
    el.addEventListener("click",function(){
        clicks++;
        clicksHTML.innerHTML="<h4>Clicks:"+clicks+"</h4>";
    });
});

