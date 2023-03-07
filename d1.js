// 1
// let pic = document.querySelector('img')
// let button = document.querySelector('button')
// button.addEventListener('click', ChangeColour)
// function ChangeColour(){
// document.body.style.backgroundColor = 'cornflowerblue'
// }

// let numberRandom = Math.floor(Math.random() * 10) //127.0.0.1:5500





let photoP1 = document.querySelector('.player1')
let photoP2 = document.querySelector('.player2')
let btnResult = document.querySelector('.result')
let rezultP = document.querySelector('.rezultatiP');

let nrRandom = Math.floor(Math.random() * 7) +1
let pointsP1, pointsP2;

let pointsP1 = 0, pointsP2 =0 ;

function Player1(){
    let nrRandom = Math.floor(Math.random() * 7) +1
if(nrRandom == 1 )
   photoP1.src = "1.png"
   pointsP1 = pointsP1 + 1
}
else if (nrRandom ==2){
    photoP1.src = "2.png"
    pointsP1 = pointsP1 + 2
}
else if (nrRandom ==3){
    photoP1.src = "3.1.png"
    pointsP1 = pointsP1 + 3
}
else if (nrRandom ==4){
    photoP1.src = "5.png"
    pointsP1 = pointsP1 + 4
}
else if (nrRandom ==5){
    photoP1.src = "5.1.png"
    pointsP1 = pointsP1 + 5
}
else if (nrRandom ==6){
    photoP1.src = "6.png"
    pointsP1 = pointsP1 + 6
}
 else{
    nrRandom = nrRandom = Math.floor(Math.random() * 7) +1
}



photoP1.addEventListener('click', Player1)
 function Player2(){
    let nrRandom = Math.floor(Math.random() * 7) +1
    switch (nrRandom) {
        case 1:
            photoP2.src = "1.png"
            pointsP2 = pointsP2 + 1;
            break;
    }
case 2:
        photoP2.src = "2.png"
        pointsP2 = pointsP2 + 2;
        break;
case 3:
             photoP2.src = "3.png"
            pointsP2+= 3;
            break;
case 4:
             photoP2.src = "5.png"
            pointsP2+= 4;
            break;
case 5:
                photoP2.src = "5.1.png"
               pointsP2+= 5;
               break;
case 6:  
            photoP2.src = "6.png"
            pointsP2+= 6;
             break;

   default:
    nrRandom =  let nrRandom = Math.floor(Math.random() * 7) +1







 }
 
 photoP2.addEventListener('click',Player2)

 function Result(){
    rezultP.innerHTML = "Piket e lojtarit te pare : " + pointsP1 + "<br>" +
    "piket e lojtarit te dyte : " + pointsP2 + "<br>";

if (pointsP1>pointsP2){
    rezultP.innerHTML +="lojetari i pare fiton"
}
else if (pointsP1 == pointsP2){
    rezultP.innerHTML +="Lojtaret jane = "
}
else{
    rezultP.innerHTML += "lOJETARI I DYTE FITONNN"
}





 }
 btnResult.addEventListener('click',Result)
 
 
        
 
       
















































 
 

      

