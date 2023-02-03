// var hours=prompt("enter sleep hours" );
// var meals=prompt("enter number of meals");
// var items= prompt("enter nymber of items you want to buy ");


  // using contractor function
  function person(full_name, money,sleep_mode,health_rate)  {
    // properties
      this.full_name = full_name;
      this.money = money;
      this.sleep_mode=sleep_mode;
      this.health_rate=health_rate; 
  }
       // Declares methods
  person.prototype.eat = function (meals) {
   if (meals==3)
   this.health_rate=100;
   else if(meals==2)
   this.health_rate=75;
   else if (meals==1)
   this.health_rate=50;
   else console.log("enter valid number");
   return this.health_rate;
  }

  person.prototype.sleep = function ( hours) {
    
    if (hours==7)
    this.sleep_mode="happy";
    else if (hours<7)
    this.sleep_mode= "tired";
    else this.sleep_mode ="lazy";
    return this.sleep_mode;
  }

  person.prototype.buy = function (items) {
    for (let i = 0; i < items; i++) {
      this.money -=10;  
  }
  return this.money;  
  }
 let user1 = new person("Elsyed mohamed",1000,"happy",75);
 console.log(user1);
 user1.buy(5);
 user1.eat(3);
 user1.sleep(12);
 console.log(user1);