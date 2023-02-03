var count = parseInt(prompt("enter number of values you want to enter"));
var sum =0;
var arr=[];
for(let i=0;i<count;i++){
arr[i]= parseInt(prompt("enter number"));
sum+=arr[i];}
let average=sum/count;
alert("sum is "+sum);
alert("average is "+average);
