//using clases
class person {
    constructor(full_name, money,sleep_mode,health_rate) {
      this.full_name = full_name;
      this.money = money;
      this.sleep_mode=sleep_mode;
      this.health_rate=health_rate;
    }
    buy=function(items){
      for (let i = 0; i < items; i++) {
          this.money -=10;  
      }
      return this.money;   
  }
  sleep=function(hours) {
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
  }
  eat=function(meals){
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
  let user1 = new person("Elsyed mohamed",1000,"happy",75);
  console.log(user1);
  user1.buy(5);
  user1.eat(3);
  user1.sleep(12);
  console.log(user1);

 