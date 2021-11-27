if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}



var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isFirefox = /Mozilla/.test(navigator.userAgent);
console.log(isIOS);
console.log(isFirefox);

let link = "https://www.soscisurvey.de/demotrack/?q=EMA_event&s="

function timer(){
let time = Date.now();
localStorage.setItem('time', time);
//window.setTimeout(document.getElementById("end").style.display = "none";", 900000);
}

function sperre() {
let time1 = Date.now();
let time0 = localStorage.getItem('time');
if ((time1 - time0) < 900000){
document.getElementById("end").style.display = "block";
document.getElementById("eingabefeld").style.display = "none";
}

function fun1() {
let params1 = new URLSearchParams(document.location.search.substring(1));
let key = params1.get("d"); 
localStorage.setItem('serial', key);
}

function fun2() {
let params = new URLSearchParams(document.location.search.substring(1));
first = parseInt(params.get("first"), 10);
}

function send(){
let token = document.querySelector("#token").value;
console.log (token);
localStorage.setItem('serial', token);
check = String(token); 
let check_link = link+check;
window.location.href = check_link;
}

fun2();

if (isIOS && (first == 123)) {
document.getElementById("ios-prompt").style.display = "block";
document.getElementById("eingabefeld").style.display = "none";
}

if (isFirefox && (first == 123)) {
document.getElementById("firefox-prompt").style.display = "block";
document.getElementById("eingabefeld").style.display = "none";
}

if (first == 123) {
document.getElementById("android-prompt").style.display = "block";
document.getElementById("eingabefeld").style.display = "none";
}

if (first == 666) {
  localStorage.removeItem('serial');
}
 
if (first == 42) {
  timer();
}

  
  
if (isNaN(first)) {
sperre();
let serial = localStorage.getItem('serial');

if (isNaN(serial)){
document.getElementById("eingabefeld").style.display = "none";
check = String(serial); 
let check_link = link+check;
window.location.href = check_link;
}

}

