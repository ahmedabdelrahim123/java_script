function calc(first_number,operation,second_number) { 
   var result;
   switch (operation) {
    case "sum":
      result=first_number+second_number;
      break;
    case "multi":
        result=first_number*second_number;
      break;
    case "subtract":
        result=first_number-second_number;
      break;
    case "moduls":
        result=first_number%second_number;
      break;
    case "division":
        result=first_number/second_number;
      break;
    
  }
    return result;
}

// take input
const first_number = prompt('Enter first num ');
const operation = prompt('Enter operation');
const second_number = prompt('Enter second num');

const result = calc(first_number,operation,second_number);

alert("the result is "+result);