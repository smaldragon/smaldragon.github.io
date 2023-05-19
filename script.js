var incident = new Date(2023, 4, 20); //YYYY, MM, DD //month counts from 00 i.e may = 04 not 05
var today = Date.now();

var difference = Math.round((today - incident)/(1000*60*60*24));
document.getElementById('days').innerHTML = difference;
//document.querySelector('#last-incident').innerHTML = incident; 
// Use the above line to show last incident. Need to code the formatting first
