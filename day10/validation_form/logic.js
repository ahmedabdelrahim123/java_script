document.getElementById("register").onsubmit=function () {
    var usernameRegex =  /^[a-zA-Z\s]+$/;
    var passwordregex= /^(?=.*[0-9])/;
  let username=document.getElementById("username").value;  
  let password=document.getElementById("password").value;  
  console.log(username);
  console.log(password);
  if(username === "" || password === "")
  {
    alert("Please enter username and password");
  }
  else{
  if(usernameRegex.test(username) === true && passwordregex.test(password) === true){
    alert("you entered valid data")
  }else
  {
    alert("Please try again with valid data format")
  }}
}