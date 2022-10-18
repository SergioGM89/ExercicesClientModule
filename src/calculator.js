const p = document.querySelector('#number');

function sumOne(){
    console.log('entro en sumeOne');
    let num = parseInt(p.textContent);
    updateNum(num+1);
}

function countToZero(){
    updateNum(0);
}

function updateNum(num){
    p.textContent = num;
}

export {
    sumOne,
    countToZero
}