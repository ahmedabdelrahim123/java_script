function timecount(str) { 
   iptime =parseInt(str);
   if (iptime<12)
   alert("time is "+iptime+" Am");
  else
  var optime=iptime-12;
  alert("time is "+optime+" Pm");
}

// take input
const string = prompt('Enter Time: ');

timecount(string);

