
const totalNumber1 = () => {
    let item1 = document.querySelector('#item1').value;
    let numbersSold = document.querySelector('#item1Total');

        return numbersSold.textContent = item1;
   
};

const totalSum1 = () => {
    let item1 = document.querySelector('#item1').value;
    let numberTotal = document.querySelector('#item1Sum');

    return numberTotal.textContent = `$${Math.floor(item1 * 239.99)}`;
};

const totalNumber2 = () => {
    let item2 = document.querySelector('#item2').value;
    let numbersSold = document.querySelector('#item2Total');
    
    return numbersSold.textContent = item2;
   
};

const totalSum2 = () => {
    let item2 = document.querySelector('#item2').value;
    let numberTotal = document.querySelector('#item2Sum');

    return numberTotal.textContent = `$${Math.floor(item2 * 129.75)}`;
};

const totalNumber3 = () => {
    let item3 = document.querySelector('#item3').value;
    let numbersSold = document.querySelector('#item3Total');
    
    return numbersSold.textContent = item3;
   
};

const totalSum3 = () => {
    let item3 = document.querySelector('#item1').value;
    let numberTotal = document.querySelector('#item3Sum');

    return numberTotal.textContent = `$${Math.floor(item3 * 99.95)}`;
};

const totalNumber4 = () => {
    let item4 = document.querySelector('#item4').value;
    let numbersSold = document.querySelector('#item4Total');
    
    return numbersSold.textContent = item4;
   
};

const totalSum4 = () => {
    let item4 = document.querySelector('#item4').value;
    let numberTotal = document.querySelector('#item4Sum');

    return numberTotal.textContent = `$${Math.floor(item4 * 350.89)}`
};

const withoutBonus = () => {
    let item1 = document.querySelector('#item1').value;
    let item11 = document.querySelector('#item1');
    let item2 = document.querySelector('#item2').value;
    let item22 = document.querySelector('#item2');
    let item3 = document.querySelector('#item3').value;
    let item33 = document.querySelector('#item3');
    let item4 = document.querySelector('#item4').value;
    let item44 = document.querySelector('#item4');
    let noBonus = document.querySelector('#without');
    let name = document.querySelector('#name').value;

    let i1 = parseInt(item1)
    let i2 = parseInt(item2)
    let i3 = parseInt(item3)
    let i4 = parseInt(item4)

    let ii1 = i1 * 239.99;
    let ii2 = i2 * 129.75;
    let ii3 = i3 * 99.95;
    let ii4 = i4 * 350.89;

    let total = ii1 + ii2 + ii3 + ii4;

    let num1 = /^\d+$/.test(item1);
    let num2 = /^\d+$/.test(item2);
    let num3 = /^\d+$/.test(item3);
    let num4 = /^\d+$/.test(item4);

    if(num1 === true && num2 === true && num3 === true && num4 === true){
        item11.style.backgroundColor = '';
        item22.style.backgroundColor = '';
        item33.style.backgroundColor = '';
        item44.style.backgroundColor = '';
        return  noBonus.textContent = ` ${name} sold $${Math.floor(total)} Dollor's worth of merchendise`;
    }else if(num1 === false || num2 === false || num3 === false || num4 === false){
        item11.style.backgroundColor = 'red';
        item22.style.backgroundColor = 'red';
        item33.style.backgroundColor = 'red';
        item44.style.backgroundColor = 'red';
        return noBonus.textContent ='Please input valid number'
}
};

const withBonus = () => {
    let item1 = document.querySelector('#item1').value;
    let item11 = document.querySelector('#item1');
    let item2 = document.querySelector('#item2').value;
    let item22 = document.querySelector('#item2');
    let item3 = document.querySelector('#item3').value;
    let item33 = document.querySelector('#item3');
    let item4 = document.querySelector('#item4').value;
    let item44 = document.querySelector('#item4');
    let bonus = document.querySelector('#bonus');
    let noBonus = document.querySelector('#without');
    let name = document.querySelector('#name').value;
    let percent = 9;

    let i1 = parseInt(item1)
    let i2 = parseInt(item2)
    let i3 = parseInt(item3)
    let i4 = parseInt(item4)

    let ii1 = i1 * 239.99;
    let ii2 = i2 * 129.75;
    let ii3 = i3 * 99.95;
    let ii4 = i4 * 350.89;

    let total = ii1 + ii2 + ii3 + ii4 + 200;
    let percentage = ( percent / 100 ) * total;
    let actualSum = bonus.textContent =  percentage;

    let num1 = /^\d+$/.test(item1);
    let num2 = /^\d+$/.test(item2);
    let num3 = /^\d+$/.test(item3);
    let num4 = /^\d+$/.test(item4);

    if(num1 === true && num2 === true && num3 === true && num4 === true){
        item11.style.backgroundColor = '';
        item22.style.backgroundColor = '';
        item33.style.backgroundColor = '';
        item44.style.backgroundColor = '';
        return bonus.textContent = ` ${name}'s weekly take home is $${Math.floor(actualSum)} Dollar's`;
    }else if(num1 === false){
        bonus.textContent ='Please input valid number';
        noBonus.textContent ='Please input valid number'
        return item11.style.backgroundColor = 'red'
    }else if(num2 === false){
        bonus.textContent ='Please input valid number'
        noBonus.textContent ='Please input valid number'
        return item22.style.backgroundColor = 'red';

    }else if(num3 === false){
        bonus.textContent ='Please input valid number';
        noBonus.textContent ='Please input valid number'
        return item33.style.backgroundColor = 'red'

    }else if(num4 === false){
        bonus.textContent ='Please input valid number';
        noBonus.textContent ='Please input valid number'
        return item44.style.backgroundColor = 'red'
    }
};

const reset = () => {

};

const alphabets = () => {
    let name = document.querySelector('#name');
    let names = document.querySelector('#name').value;
    let noBonus = document.querySelector('#without');
    let bonus = document.querySelector('#bonus');
    
    let check =  /^[a-zA-Z]+$/.test(names);
     
    if(check === true){
        return name.style.backgroundColor = ''
    }else if(check === false){
         noBonus.textContent = 'Please input valid name'
         bonus.textContent = 'Please input valid name'
         return name.style.backgroundColor = 'red';
    }else{
        return name.style.backgroundColor = 'red';
    }

};

const onlyDigits = () => {
    let item1 = document.querySelector('#item1').value;
    let item11 = document.querySelector('#item1');
    let item2 = document.querySelector('#item2').value;
    let item22 = document.querySelector('#item2');
    let item3 = document.querySelector('#item3').value;
    let item33 = document.querySelector('#item3');
    let item4 = document.querySelector('#item4').value;
    let item44 = document.querySelector('#item4');
    let noBonus = document.querySelector('#without');
    let bonus = document.querySelector('#bonus');

    let isnum111 = /^\d+$/.test(item1);;
    let isnum222 = /^\d+$/.test(item2);;
    let isnum333= /^\d+$/.test(item3);;
    let isnum444 = /^\d+$/.test(item4);;

    if(isnum111 === true || isnum222 === true || isnum333 === true || isnum444 === true){
        item11.style.backgroundColor = '';
        item22.style.backgroundColor = '';
        item33.style.backgroundColor = '';
        return item44.style.backgroundColor = '';
    }else if(isnum111 === false){
        item11.style.backgroundColor = 'red';
        noBonus.textContent ='Please input valid number'
        return bonus.textContent ='Please input valid number'
    }else if(isnum222 === false){
        item22.style.backgroundColor = 'red';
        noBonus.textContent ='Please input valid number'
        return bonus.textContent ='Please input valid number'

    }else if(isnum333 === false){
        item33.style.backgroundColor = 'red';
        noBonus.textContent ='Please input valid number'
        return bonus.textContent ='Please input valid number'

    }else if(isnum444 === false){
        item44.style.backgroundColor = 'red';
        noBonus.textContent ='Please input valid number'
        return bonus.textContent ='Please input valid number'
    }
};
function refreshPage(){
    window.location.reload();
} 


let submit = document.querySelector('#submit').addEventListener('click', function() { totalNumber1(); totalSum1(); totalNumber2(); totalSum2(); totalNumber3(); totalSum3(); totalNumber4(); totalSum4(); withoutBonus(); withBonus(); alphabets(); onlyDigits() })
let refresh = document.querySelector('#reset').addEventListener('click', function(){ refreshPage() })