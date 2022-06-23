let calc = window.prompt("what calculation would you like to do (+ - / *): ");
let firstNum = window.prompt("Enter the First number");
let secNum = window.prompt("Enter the Second number:");

if (calc == "*") {
    ans = parseInt(firstNum) * parseInt(secNum)     
    alert("Your Answer is " + ans);
} else if (calc == "+") {
    ans = parseInt(firstNum) + parseInt(secNum)     
    alert("Your Answer is " + ans);
} else if (calc == "/") {
    ans = parseInt(firstNum) / parseInt(secNum)     
    alert("Your Answer is " + ans);
} else if (calc == "-") {
    ans = parseInt(firstNum) - parseInt(secNum)     
    alert("Your Answer is " + ans);
} 
else {
    alert("You've inputed a wrong symmbol");
}

