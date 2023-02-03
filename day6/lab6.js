class Shape {
   constructor(name,sides,sideLength){
    this.name=name;
    this.sides=sides;
    this.sideLength=sideLength;
   }
    calprimeter () {
        return this.sideLength*this.sides;
       }
  }

   var square0 = new Shape("square",4,5);
   console.log(square0.calprimeter()); 
   var triangle = new Shape("triangle",3,3);
   console.log(triangle.calprimeter()); 

   class square extends Shape{
   constructor(sideLength){
   super("square",4,sideLength);}
   calarea(){
    return this.sideLength*this.sideLength;
   }
}
var square2= new square(8);
console.log(square2.calarea()); 
console.log(square2.calprimeter()); 

///////////////////////////////

class Triple{
    static customName="tripler";
    static description = "I triple any number you provide";
    static calculate(n=1){
        return n*3;
    }
}
class SquaredTriple extends Triple{
    static longDescription;
    static description ="I square the triple of any number you provide";
    static calculate(n){
        //hwa 3uz y calc 3 d lwhdha tgble hsba bt3t parent f tkon b 9 wl tnea same  f ttl3le 81 w 3shan akhdodha ml parent hhot super
          return super.calculate(n)*super.calculate(n);
      
      }}
      
      console.log(Triple.description); // 'I triple any number you provide' 
      
      console.log(Triple.calculate()); // 3 
      
      console.log(Triple.calculate(6)); // 18 
      
       
      
      console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation) 
      
      console.log(SquaredTriple.description); // 'I square the triple of any number you provide' 
      
      console.log(SquaredTriple.longDescription); // undefined 
      
      console.log(SquaredTriple.customName); //tripler