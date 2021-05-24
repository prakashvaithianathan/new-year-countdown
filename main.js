const year = document.getElementById("year");
const date = document.getElementById("date");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countDown = document.getElementById("countDown");
const loading = document.getElementById("loading");

var currentYear = new Date().getFullYear();
var nextYear = currentYear +1;
year.innerHTML=nextYear;

var newYearTime = new Date("January 01 2022 00:00:00");


function updateCountdown(){
    var currentTime = new Date();
    var diff = newYearTime - currentTime;
    var d = Math.floor(diff/1000/60/60/24);
    var h = Math.floor(diff/1000/60/60)%24;
    var m = Math.floor(diff/1000/60)%60;
    var s = Math.floor(diff/1000)%60;
    
      days.innerHTML =d  ;
      hours.innerHTML =h < 10 ? "0"+h : h;
      minutes.innerHTML =m < 10 ? "0"+ m : m;
      seconds.innerHTML =s < 10 ? "0"+ s : s;
    
}

setInterval(updateCountdown,1000);







function loadingTime(){
    loading.remove();
    countDown.style.display="flex";

}
setTimeout(loadingTime,1000);

