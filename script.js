//let a = 5;
//let sum = 0;
//for(let i=1; i<=a; i++){
//    sum=0;
//    for(let j = 1; j<=i; j++){
//        sum+=j;
//    }
//
//console.log('sum' + i + '=' + sum);
//}
//
//let arr = ['i', 'can','reed'];
//console.log(arr);
////arr.splice(1,2);
//console.log(arr);
//arr.splice(3,0,'books');
//console.log(arr);
//arr.splice(1,2);
//console.log(arr);
//
//let b=1;
//while(b<50){
//    console.log(b);
//    b++;
//}
//
//
//for(let c=35; c>8; c--){
//    console.log(c);
//}
//
//let d=89;
//while(d<=89 && d>=11){
//    document.write(d + '<br/>');
//    d--;
//}
//
//
//let summa=0;
//for(let s=0;s<=100;s++){
//    summa+=s;
//}
//console.log(summa);
//
//let f=12;
//let summa1=0;
//
//for(let i=1; i<=f; i++){
//    summa1=0;
//    for(let y=1; y<=i; y++){
//    summa1+=y;
//    }
//    console.log('sum' + i + '=' + summa1);
//}

let num = 56;
while(num >= 8 ){
    console.log(num);
    num -=2;
}
for(let i = 8; i <= 56; i++ ){
    if(i % 2  )continue;

console.log(i);
}
// табл умн
//let num2=0;
//    for(let i=2 ;i <= 9; i++){
//        for(let j=2; j<= 9 ; j++){
//            num2 = i * j;
//            document.write(i + "*" + j + "=" + num2 + ' ' + '<br/> ' );
//            }
//        
//        document.write( '<br/>');
//    } 
//


let n1=1000;
let num1=0;

while(n1>=50){
    n1/=2;
    num1++;
}


console.log(n1);
console.log(num1);

//Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
//тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
//общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
//число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
//может ввести отрицательное значение.----------------------------------------------------------------------------------
//let user= prompt('get number');
//let number=0;
//let sum=0;
//
//while(user !=='' && user !=='0') {
//    if(isNaN(+user)){
//        alert('not number');
//        break;
//    }
//    if(+user < 0){
//        alert('not number whith "-"');
//        break;
//    }
// 
//number++;
//sum +=(+user);
//user= prompt('get now number');
//
//
//} 
//alert(`ввели чисел:${number}`);
//alert(`сумма чисел:${sum}`);
//alert(`Среднее арифметическое:${sum/number}`);
//
//Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
//8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.

let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
const arr = str.split(" ");

let max = arr[0];
let min = arr[0];

for(let i =0; i<arr.length; i++){
    if(arr[i]> max){
        max = arr[i];
    }
    if (arr[i]< min){
        min = arr[i];
    }
    
}

document.write(`max number ${max}`);
document.write('<br/>');

document.write(`min number ${min}`);

//Дано произвольное целое число n. Написать программу, которая:
//a. разбивает число n на цифры и выводит их на экран;
//b. подсчитывает сколько цифр в числе n;
//c. находит сумму цифр числа n;
//d. меняет порядок цифр числа n на обратный.

//Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.

let n=123456789;
    let amount=0;// счетчик
    let sum=0;// для записи суммы
    let reverse="";// для закписи реверса

    document.write(`Число: ${n} <br>`);

    while(n>0)
    {
        let number=n%10;//переменную в кот будем запис числа
        reverse+=number;
        sum+=number;
        amount++;
        document.write(`${number} `);
        n=Math.floor(n/10);
    }
    document.write(`Наоборот: ${reverse}, сумма: ${sum}, количество: ${amount}`);

let fruit =['apple','lime','tomato'];
console.log(fruit);

for(let i=0; i<fruit.length;i++){
    console.log(fruit[i]);
}
for(let i=fruit.length-1; i>=0; i--){
    console.log(fruit[i]);
}

let arr2 = [];
for( let i=8; i<=20;i++){
    arr2[i]=i;   
}
console.log(arr2);//лучше 

let arr22 = [];
for( let i=8; i<=20;i++){
    arr22.push(i);   
}
console.log(arr22);

document.write('<br/>');

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
//элементы на экран.
let numArr =[1,2,3,4,5];
for(let i = 0; i<= numArr.length; i++);
    document.write(numArr);

//Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
//быть положительными и отрицательными. Выведите на экран только отрицательные
//числа, которые больше -10, но меньше -3.
document.write('<br/>');


let arr23 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
console.log(arr23);

for (let i = 0; i < arr2.length; i++ ){
   if(arr23[i] > -10 && arr23[i] < -3){
    console.log(arr23[i]);
   }
}
//Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
//while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
//массива. Запишите ее в переменную result и выведите.
document.write('<br/>');


let arrayNow = [];
let result=0;
for(let i = 23; i < 57; i++){
    arrayNow.push(i);
    
}
for(let i = 0; i <arrayNow.length; i++){
    result+=arrayNow[i];
}
document.write(arrayNow);
document.write('<br/>');
document.write(result);
document.write('<br/>');
//Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr24 = ['10','20','30','40','50','235','3000'];

let arr24Filter = arr24.filter(elem =>
     elem[0]==='1'|| elem[0]==='2' ||elem[0]==='3'); 

     document.write(arr24Filter);
