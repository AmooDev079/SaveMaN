let quizes = [
    {ans:'physics',hint:'study of matter'},
    {ans:'matter',hint:'something the has mass and occupy space'},
    {ans:'thermometer',hint:'used to measure temparature'},
    {ans:'distance',hint:'length between two points'},
    {ans:'speed',hint:'rate of change of distance'},
    {ans:'botany',hint:'study of animals'},
    {ans:'volume',hint:'amount of space occupied by an object'},
    {ans:'area',hint:'space occupied by an object on a plane'},
    {ans:'wind',hint:'moving air'},
    {ans:'coulombs',hint:'SI unit of charges'},
    {ans:'current',hint:'rate of flow of charge'},
    {ans:'heat',hint:'form of energy that can be transferred from hot to cold region'},
    {ans:'gravity',hint:'pulls everthing towards the center of the earth'},
    {ans:'adhesive',hint:'force of attraction between two unlike molecule'},
    {ans:'sublimation',hint:'process of changing solid to gas'},
    {ans:'temparature',hint:'degree of hotness or coldness of a body'},
    {ans:'dipoles',hint:'micro magnets thats makes up a magnet domain'},
    {ans:'rainbow',hint:'formed after dispersion of white light'},
    
]
let wordDis = document.querySelector('.word-display');
let gameOver = document.querySelector('.gameover');
let ul = wordDis.childNodes;
let gameWin = document.querySelector('.gamewin');
console.log(ul);
let gameOverImg = document.querySelector('.gameover img');
let gameOverText = document.querySelector('.gameover .h2');
let gameOverCor = document.querySelector('.gameover .correctword');
let btnDisabled =[] ;
let corr = document.querySelector('.gameover h2 span');
let img = document.querySelector('.img img');

let incorect = document.querySelector('.wrongGuess span');
let gueses =0;
let rightWord = 0;
let totalGuess = 7;
let keyboard = document.querySelector('.buttons');
let keys = keyboard.childNodes;
let currWord;

function resetGame() {
img.src = 'imgstart.png' ;
gueses = 0;
gameOver.style.display = 'none';
gameWin.style.display = 'none';
currWord;
rightWord =0;
var i=0;
while(i<ul.length){
    if(ul[i].nodeName=="LI"){
       wordDis.removeChild(ul[i]); 
        continue;
    }i++;
}
for (let j = 0; j < keys.length; j++) {
    if(keys[j].disabled == true){
        keys[j].disabled = false;
    }
    console.log(keys);
}
getRandomQuiz();
}

document.getElementById('strt').addEventListener('click',()=>{
    document.getElementById('start').style.display ='none';
})




for (let i = 97; i <=122; i++) {
    let btn = document.createElement('button');
btn.innerText = String.fromCharCode(i).toUpperCase();
keyboard.appendChild(btn);
btn.addEventListener('click',(e)=>{
    start(e.target,String.fromCharCode(i).toUpperCase())
})
    //console.log(String.fromCharCode(i).toUpperCase())
    
};


const getRandomQuiz = ()=>{
    const {ans,hint} = quizes[Math.floor(Math.random()*quizes.length)];
    
    document.querySelector('.hint h4').innerText = 'QUIZ : '+ hint;
   


let letters = ans.toUpperCase().split('');
currWord = letters;


for (let i = 0; i < letters.length; i++) {
    let li = document.createElement('li');
    li.classList.add('letter');
    
    wordDis.appendChild(li);
    incorect.innerHTML = gueses+' / '+totalGuess;
    
}


}
getRandomQuiz();



function start(btn,letter) {
    if(currWord.includes(letter)){
        currWord.forEach((l,i) => {
            if(l === letter){
                btn.disabled = true;
        wordDis.querySelectorAll('li')[i].innerText = l;
        rightWord++;
     
        if(rightWord===currWord.length&&gueses==0 || rightWord===currWord.length&&!gueses==0){
            gameWin.style.display = 'block';
           
        
        }else{
           
        
            img.src = './img10.PNG'
            wordDis.querySelectorAll('li')[i].classList.add('guessed');
        }
        wordDis.querySelectorAll('li')[i].classList.add('guessed');


            }
        });
        
        

       // console.log(letter,currWord,'correct',num)
    }else{
        gueses++;
        img.src = './imgno'+gueses+'.PNG'
        incorect.innerHTML = gueses+' / '+ totalGuess;
        corr.innerHTML = currWord.join('');  
        if(gueses == totalGuess)
{
   // console.log('end')
gameOver.style.display = 'block';
}       // console.log('wrong')
    }
    
}
//console.log(wordDis.childNodes)
document.querySelector('.replay').addEventListener('click',resetGame);
document.querySelector('.gamewin .replay').addEventListener('click',resetGame);
document.querySelector('.close').addEventListener('click',resetGame);