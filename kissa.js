function lasketemp() {
   
   var tempSelected = document.getElementById("temp_diff").value;
   var numberTemp = document.getElementById("temp").value;
   var result;



   if (tempSelected == "CFK") {
      f = cToF(numberTemp);
      k = cToK(numberTemp);
      document.getElementById("resultContainer").innerHTML = `${numberTemp} celcius on ${f} fahrenheit ja ${k} kelvin`;

   }

   if (tempSelected == "FCK") {
      c = fToC(numberTemp);
      k = fToK(numberTemp);
      document.getElementById("resultContainer").innerHTML = `${numberTemp} fahrenheit on ${c} celsius ja ${k} kelvin`;

   }

   if (tempSelected == "KFC") {
      f = kToF(numberTemp);
      c = kToC(numberTemp);
      document.getElementById("resultContainer").innerHTML = `${numberTemp} kelvin on ${f} fahrenheit ja ${c} celsius`;

   }
}


function cToF (celsius) {
   var fahrenheit = Math.round((celsius * 9/5) + 32 );
   return fahrenheit;
}

function cToK (celsius) {
   var kelvin = Math.round (+celsius + 273.15);
   return kelvin;
}



function fToC(fahrenheit) {
   
   var celsius = Math.round((fahrenheit - 32) * 5/9) ;
   return celsius;
} 

function fToK(fahrenheit) {
   var kelvin = Math.round((+fahrenheit + 459.67) * 5/9) ;
   return kelvin;
}


function kToF(kelvin) {

   var fahrenheit = Math.round(kelvin * 9/5 - 459.67);
   return fahrenheit;
}


function kToC(kelvin) {
   var celsius = Math.round(kelvin - 273.15);
   return celsius; 
}