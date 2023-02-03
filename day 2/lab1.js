var age = prompt("enter your age");
do{
if (age<0)
alert("enter valid number");
else if (age >=1 && age <=10)
alert("child category");
else if (age >=11 && age <=18)
alert("teenager category");
else if (age >=19 && age <=50)
alert("grown up category");
else
alert("Old category");
var age = prompt("enter your age");
}while(age != '' && age != null)

// var birthyear = prompt("enter your birth year");
// document.write("welcome " + firstname +" "+lastname +" you are "+birthyear+" years old");
// alert('your name is' + name);
// console.log(name);