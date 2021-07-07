let userName = prompt("Adın Nedir ?");
var minutes;
var seconds;
var hours;
var day;
var days;
var currentDay;
this.digitalClock();

function digitalClock(){

let date = new Date();
 minutes = date.getMinutes();
 seconds = date.getSeconds();
 hours = date.getHours();
 day = date.getDay();
 days = ["Pazartesi" , "Salı" , "Çarşamba" , "Perşembe" , "Cuma" , "Cumartesi" , "Pazar"];
 currentDay = days[day-1];
document.getElementById("dt").innerHTML = hours + ":" + minutes + ":" +seconds + " - " + currentDay;

}
this.checkTime()
function checkTime(){
console.log('checkTime');
  if(userName.length == 0){
    alert("Lütfen sayfayı yenileyerek adınızı giriniz");
  }else{
    alert("Giriş Başarılı");
  }

}

document.getElementById("userName").innerHTML = userName;

setInterval(function(){
  this.digitalClock();
},1000);
