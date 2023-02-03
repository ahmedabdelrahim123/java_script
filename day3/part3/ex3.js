const myFunction = () => {
  let myValue = 2;
  console.log(myValue);

  const childFunction = () => {
       console.log(myValue += 1);
  }

  childFunction();
}

myFunction();
//A closure is a function having access to the parent scope, even after the parent function has closed.