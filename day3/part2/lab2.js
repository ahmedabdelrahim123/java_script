
var name;
var phone_number;
var user = [{ name, phone_number }];
var operation = prompt("do you want to add or search");
do{
   switch (operation) {
    case "add":
      var newuser = {};
      newuser.name = prompt("Enter user name:");
      newuser.phone_number = prompt("Enter phone number:");
      user.push(newuser);
      break;
    case "search":
     var contact =prompt("Enter phone number you want to find:");
     var flag=0;
     for(let i=0;i<user.length;i++)
     {   var current_user=user[i];
       if (contact==current_user.phone_number)
      { flag=1;
        alert("user name is "+current_user.name+", phone number is "+current_user.phone_number);
        break;
      }
     } //end for
     if (flag==0)
     alert("user not found");
      break;   
  } // end switch
var operation = prompt("do you want to add or search");
} while(operation != '' && operation != null);

//alert("the result is "+result);