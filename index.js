let enterNumber1 = parseInt(prompt("Nhập số thứ nhất:"));
while(isNaN(enterNumber1)){
    enterNumber1 = parseInt(prompt("Nhập lại số thứ nhất:"));;
}
let enterNumber2 = () => parseInt(prompt("Nhập số thứ hai:"));
while(isNaN(enterNumber2) || enterNumber2<enterNumber1){
    enterNumber2 = parseInt(prompt("Nhập lại số thứ hai:"));;
}
function array(enterNumber1, enterNumber2) {
    arr=[];
    for (let i = enterNumber1; i <= enterNumber2; i++) {
        arr.push(i);
    }return arr;
}
let mang = array(enterNumber1, enterNumber2);
function find(number) {
    let arrChange = [];
    for(let i = 0; i<number.length; i++)
    {
        let index = 0;
      if(number[i] == 1) index = 1;
        else if(number[i] > 1){
            if(number[i] == 2) index = 1;
            else{
               for (let j = 2; j < number[i]; j++) {
                  if(number[i] % j == 0 ) {
                    index = 0;
                    break;
                  }else index = 1;
                }
            }
        }
        if(index == 1) arrChange.push(number[i]);
        else arrChange.push();  
    }
    return arrChange;
}
function sum(array) {
    let sum =0 ;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }return alert(sum);
}
sum(find(mang)); 