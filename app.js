                                // Chapter # 31 to 34


//  TASK # 01

// var a = new Date();
// alert(a);

//  TASK # 02

// function show_now(){
//     var my_month=new Date()
    
    
    //  var month_name= ["january","february","March","April","May","june","july","august","September","October","November","December"];
    // alert ("Current Month : " + month_name[my_month.getMonth()]); 
    // }
    // show_now();


//  TASK # 03

// var a = new Date();
// var b =a.toString();
// var c =b.slice(0,3);
// alert(c);


//  TASK # 04


// function week_end(){

// var a = new Date();
// var b = a.getDay();

// if (b === 5 || b ===6)
// {
//     alert("It's Funday");
// }
// }
// week_end();


//  TASK # 05

// var a = new Date();
// var b = a.getDate();
//  if (b <= 16){
//      alert("First fifteen days of the mont");
//  } 
//  else {
//      alert("Last days of the Month");

//  }



// TASK # 06

// var a = new Date();

// var b = new Date("Jan 1,1970");
// var c = b.getTime();
// var e = (c/6000)*1000;


// console.log("Current Date : " + a);
// console.log("Elapsed Millisecond : " + c);
// console.log("Elapsed Minutes : " + e);



//  TASK # 07

// var a = new Date();
// var hour = a.getHours();
// if(hour <= 12){
//     alert("its AM")
// }
// else{
//     alert("its PM")
// }
  

// var a = new Date();
// var t = a.getMonth("april");
// var today2 =a.getMonth()-t;
// alert(t);


//  TASK # 08

//  var laterDate = new Date ("May 31, 2020");
//  alert(laterDate);


//  TASK # 09
// var a = new Date("june 18,2015");
// var b = new Date();

// var c =b.getTime() - a.getTime();
// var d =Math.round( c/(1000 * 3600 * 24));

// alert(d + " days have passed since 1st ramandan,2015");




                                    // Chapter # 26 - 30


// Task # 01

// var num = prompt("Enter any integer");
// var round = Math.round(num);
// var ceel = Math.ceil(num);
// var floors = Math.floor(num);

// document.write("number : "+num + "<br>");
// document.write("Round off value : "+round + "<br>");
// document.write("floor value : "+ floors + "<br>");
// document.write("ceil value : "+ ceel + "<br>");


// Task # 02


// var num = prompt("Enter any integer");
// var round = Math.round(num);
// var ceel = Math.ceil(num);
// var floors = Math.floor(num);

// document.write("number : "+num + "<br>");
// document.write("Round off value : "+round + "<br>");
// document.write("floor value : "+ floors + "<br>");
// document.write("ceil value : "+ ceel + "<br>");


// Task # 03


// var a = prompt("Enter any number");
// var b = Math.abs(a);
// alert(b);


// Task # 04


// var min=1; 
// var max=7; 
// var dice = Math.floor(Math.random() * (+max - +min) + +min);
// document.write("random dice value " + dice)


// Task # 05


// var min=1; 
// var max=3; 

// var toss =Math.floor(Math.random() * (+max - +min) + +min);


// if(toss === 1){
//     alert(toss + "\n random coin value : Tails")
// }
// if(toss === 2){
//     alert(toss + "\n random coin value : Heads")
// }


 // Task # 06


// var min=1; 
// var max=101; 
//  var ran = Math.floor(Math.random() * (+max - +min) + +min);
//  document.write("random number between 1 to 100 : " +ran );



 // Task # 07


//  var a = prompt("Enter your weight");
//  if (a >= 50 && a<=60){
//      document.write("The Weight of User is : "+ a + " Kilograms");

//  }
 

 // Task # 08

//  var min=1; 
// var max=11; 
//  var ran = Math.floor(Math.random() * (+max - +min) + +min);
//  var a = +prompt("Enter a n umber between 1 to 10");
//  if(a===ran){
//      alert("Congratulations");
//  }
//  else{
//      alert("Try Again");
 //}


                                // Chapter # 35 -38


// TASK # 01

// function current(){
//     var a = new Date();
//     document.write(a);
// }
// current();


// TASK # 02


// function greet(a){
// alert("Congratulations "+a);
// }
// greet("hamza Mateen");


// TASK # 03


// var a = +prompt("Enter num1");
// var b = +prompt("Enter num2");
// function calc (num1,num2){
// alert(a+b);
// }
// calc(a,b);



// TASK # 04


// function calc (num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
        
//     }

//   else if(opr === "-"){
//         return num1 - num2
//     }


//  else if(opr === "*"){
//         return num1 * num2
//     }
//     else if(opr === "/"){
//         return num1 / num2
//     }
// else{
//     return "Incorrect operator "
// }
// }
// var result  = calc(5,"+",5);
// alert(result);


// TASK # 05


// function root (squar){
//     alert(squar*squar);
// }
// root(5);


// TASK # 06


// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }

//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);
  


// Task # 7 
// var b = prompt("Enter starting number");
// var n = prompt("Enter Ending");
// for(a=b;a<=n;a++){
//     document.write("<br>" + a);
// }



// TASK # 09
// Pass by value
// function rect (10,5){
// var A = width* height;
// alert(A);
// }
// rect();

// Pass by variables

// function rect (width,height){
//     var A = width* height;
//     alert(A);
//     }

// rect(10,5);


// TASK # 11



// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (let i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }

// console.log(capital_letter("the quick brown fox"));



// function cou(a = hamza,b=o){
// var c = a.count(b);
// alert(c);
// }
// cou();




// TASK # 12



// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));




// TASK # 14

// function calcCircumference(radius){
//     var pie = 3.142;
//     var a = 2 ;
// alert( "The Circumference is "+pie*a*radius);
// }
// calcCircumference(5);


// function calcArea(radius){
//  var pie = 3.142;
//  alert(" Area of Circle " +pie*(radius*radius));

// }
// calcArea(5);





// Task # 14

   
// function show_now(){
//     var cust = "Hamza Mateen";
//     var uni = 410;
//     var char = 16.5;
//     var lat = 355.50;
//         var my_month=new Date()
        
        
//          var month_name= ["january","february","March","April","May","june","july","august","September","October","November","December"];
//         document.write("Customer name : "+cust + "<br>");
//         document.write("Month : " +month_name[my_month.getMonth()] + "<br>")
//         document.write("Number of Units " + uni + "<br>");
//         document.write("Charges per Unit "+ char +"<br>");
//         document.write("Net Amount Payable with in due date " + (uni*char) + "<br>");
//         document.write("Late Payment Surcharge "+lat +"<br>" ) ;
//         document.write("Gross amount payable " + ((uni*char)+lat));  
//     }
//         show_now();







// task madyum
// var num = 35.36;
// var x = num.toString().replace(".","");

// document.write(x);



// Task # madyum2

// var str = prompt("Enter any String"); 
//      var res = str.charAt(str.length-1); 
//         document.write("User input : "+str +"<br>");
//         document.write("User input :"+res);    


// task # 13 31


// var c =16;
// var a = new Date();
// var b = a.getFullYear();
// var d = b - c;
// alert(d);

// task # 11 31

// var birthday = new Date();
//  var b = birthday.getHours();
// var c =b-1;
// birthday.setHours(c);
// alert(birthday);