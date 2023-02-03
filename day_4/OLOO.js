
  
//OLOO
  const person ={
    init (full_name, money,sleep_mode,health_rate) {
        this.full_name = full_name;
        this.money = money;
        this.sleep_mode=sleep_mode;
        this.health_rate=health_rate; 
        this.buy = function (items) {
          for (let i = 0; i < items; i++) {
              this.money -=10;  
          }
          return this.money;  
      }

      this.sleep=function(hours) {
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

      this.eat=function(meals){
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
  const user1 = Object.create(person);
  user1.init("Elsyed mohamed",1000,"happy",75);
  console.log(user1);
  console.log(user1.full_name);
  console.log(user1.buy(5)); 
  console.log(user1.sleep(12));
  console.log(user1.eat(3));
  
  //console.log(user1);
