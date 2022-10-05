const c = () => {
    let C = document.querySelector('#number').value;
    let result = document.querySelector('#result');

    let num = parseInt(C)

    let x =  (9/5 * num + 32);
    return result.textContent = x
};

const f = () => {
    let F = document.querySelector('#number').value;
    let result = document.querySelector('#result');

    let num = parseInt(F)

    let x =  5/9 * (num - 32) ;
    return result.textContent = x.toFixed(4)
};

const checkForString = () => {
    let number = document.querySelector('#number');
    let number1 = document.querySelector('#number').value;
    let result = document.querySelector('#result')

    /*let x = /^\d+$/.test(number1)*/

    if ( isNaN(number1) ){
        result.textContent = "Please input valid number"
        return number.style.backgroundColor = 'red';    
    }else if(Number){
        return number.style.backgroundColor = '';
    }
};
let submit = document.querySelector('#cel').addEventListener('click', function(){ c(); checkForString() })
let submit2 = document.querySelector('#fer').addEventListener('click', function(){ f(); checkForString() })