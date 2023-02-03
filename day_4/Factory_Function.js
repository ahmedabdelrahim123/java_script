

//Factory Function
function person(full_name, money,sleep_mode,health_rate)  {
  return{          
    full_name,
    money,
    sleep_mode,
    health_rate,
    buy (items) {
      for (let i = 0; i < items; i++) {
          this.money -=10;  
      }
      return this.money;  
  },
  sleep (hours) {
      if (hours==7) {
          this.sleepMood="Happy"; 
      }
      else if(hours<7){
          this.sleepMood="Tired";
      }
      else if(hours>7){
          this.sleepMood="Lazy";
      }
      return this.sleepMood;
  },
  eat (meals){
      if (meals==3) {
          this.healthRate=100; 
      }
       else if(meals==2){
           this.healthRate=75;
       }
       else if(meals==1){
           this.healthRate=50;
       }
      return this.healthRate; 
  }
}
   } 
      
   const user1 = person("ahmed mohamed",1000,"happy",75);
   console.log(user1);

   console.log(user1.full_name) ;
   
   console.log(user1.buy(20));
   console.log(user1.sleep(20));
   console.log(user1.eat(1));