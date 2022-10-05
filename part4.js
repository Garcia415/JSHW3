const random = Math.floor(Math.random() * 10);
const random2 = Math.floor(Math.random() * 10)
let times = random * random2;

function refreshPage(){
    window.location.reload();
} 

const randomNum = () => {
    let question = document.querySelector('#question');
    let answer = document.querySelector('#answer').value;
    let p = document.querySelector('#noValue');


    question.textContent = `What is ${random} * ${random2} ?`;
};

const check = () =>{
    let answer = document.querySelector('#answer').value;
    let div = document.querySelector('#questionm');
    let p = document.querySelector('#noValue');

    n1 = parseInt(answer);
    
    if(n1 === times){
        return p.textContent = 'You are correct'
    }else{
        return p.textContent = 'Incorrect'
    }
};

function color(){
    let answer = document.querySelector('#answer').value;

    n1 = parseInt(answer);
    
    if(n1 === times){
        document.getElementById("result").style.backgroundColor = 'green';
    }else{
        document.getElementById("result").style.backgroundColor = 'red';
    }
}



let submit = document.querySelector('#generate').addEventListener('click', function(){ randomNum();})
let submit2 = document.querySelector('#submit').addEventListener('click', function(){ color(); check() })
let freh = document.querySelector('#refresh').addEventListener('click', function(){ refreshPage() })