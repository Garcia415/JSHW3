const answer = () => {
    let hwNum = document.querySelector('#hwAverage').value;
    let mtNum = document.querySelector('#midTerm').value;
    let feNum = document.querySelector('#finalExam').value;
    let partiNum = document.querySelector('#participation').value;
    let answer = document.querySelector('#result');

    n1 = parseInt(hwNum);
    n2 = parseInt(mtNum);
    n3 = parseInt(feNum);
    n4 = parseInt(partiNum);

    n1 = .5 * n1;
    n2 = .2 * n2;
    n3 = .2 * n3;
    n4 = .1 * n4

    final = n1 + n2 + n3 + n4;
    let finalAnswer = Math.floor(final)
    return answer.textContent = `Your grade is a : ${finalAnswer}%`
};

const checkForErrors = () => {
    let hwNum = document.querySelector('#hwAverage').value;
    let mtNum = document.querySelector('#midTerm').value;
    let feNum = document.querySelector('#finalExam').value;
    let partiNum = document.querySelector('#participation').value;
    let answer = document.querySelector('#result');

    n1 = parseInt(hwNum);
    n2 = parseInt(mtNum);
    n3 = parseInt(feNum);
    n4 = parseInt(partiNum);

    n1 = .5 * n1;
    n2 = .2 * n2;
    n3 = .2 * n3;
    n4 = .1 * n4

    final = n1 + n2 + n3 + n4;
    let finalAnswer = Math.floor(final)
       if(isNaN(finalAnswer)){
        return answer.textContent = 'Please enter number'
       }
    return answer.textContent = `Your grade is a : ${finalAnswer}%` 
};

const checkForOver = () => {
    let hwNum = document.querySelector('#hwAverage').value;
    let mtNum = document.querySelector('#midTerm').value;
    let feNum = document.querySelector('#finalExam').value;
    let partiNum = document.querySelector('#participation').value;
    let answer = document.querySelector('#result');

    o1 = Number(hwNum);
    o2 = Number(mtNum);
    o3 = Number(feNum);
    o4 = Number(partiNum);

    if( o1 > 100 || o2 > 100 || o3 > 100 || o4 > 100 || o4 > 100 ){
        return answer.textContent = 'Please Enter Number Under 100'
    };
};

const checkforUnder = () => {
    let hwNum = document.querySelector('#hwAverage').value;
    let mtNum = document.querySelector('#midTerm').value;
    let feNum = document.querySelector('#finalExam').value;
    let partiNum = document.querySelector('#participation').value;
    let answer = document.querySelector('#result');

    u1 = Number(hwNum);
    u2 = Number(mtNum);
    u3 = Number(feNum);
    u4 = Number(partiNum);

    if( u1 < 0 || u2 < 0 || u3 < 0 || u4 < 0 || u4 < 0 ){
        return answer.textContent = 'Negetaive Number(s) are not allowed'
    };
};

const retakeSemester = () => {
    let hwNum = document.querySelector('#hwAverage').value;
    let mtNum = document.querySelector('#midTerm').value;
    let feNum = document.querySelector('#finalExam').value;
    let partiNum = document.querySelector('#participation').value;
    let answer = document.querySelector('#result');

    n1 = Number(hwNum);
    n2 = Number(mtNum);
    n3 = Number(feNum);
    n4 = Number(partiNum);

    n1 = .5 * n1;
    n2 = .2 * n2;
    n3 = .2 * n3;
    n4 = .1 * n4

    final = n1 + n2 + n3 + n4;
    let finalAnswer = Math.floor(final)

    if( finalAnswer < 70 ){
        return answer.textContent = ` Student must retake the course. Your grade is a : ${finalAnswer}%`
    };
};


const over = () => {
    let hwNum = document.querySelector('#hwAverage').value;
    let mtNum = document.querySelector('#midTerm').value;
    let feNum = document.querySelector('#finalExam').value;
    let partiNum = document.querySelector('#participation').value;
    let answer = document.querySelector('#result');

    n1 = Number(hwNum);
    n2 = Number(mtNum);
    n3 = Number(feNum);
    n4 = Number(partiNum);

    if ( n1 > 100 || n2 > 100 || n3 > 100 || n4 > 100 ){
        return answer.textContent = 'Please enter number below 100'
    }else if (n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0){
        return answer.textContent = 'Please enter number greater than 0'
    }

};



let submit = document.querySelector('#submit').addEventListener('click', function() { answer();checkForErrors(); checkForOver(); checkforUnder(); retakeSemester(); over() } )