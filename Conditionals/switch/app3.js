/*

Suppose a situation in which you are expected to show ‘less than 10’ if a number is less than 10.
However, if it’s greater than 10, print ‘greater than 10’. 
Also, deal with the case in which it’s equal to 10 with an appropriate message.

*/

let number = "10";

// When we use switch(true) then if the expression in my case evaluates to true - it will be matched.
switch (true) {

    case (number < 10):
        console.log("less than 10");
        break;


    case (number > 10):
        console.log("greater than 10");
        break;


    case (number === 10):
        console.log("The number you entered is 10");
        break;
    
    default:
        console.log("The number is not equal to 10");
        break;

}
