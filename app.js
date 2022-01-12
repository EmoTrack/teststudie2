//Service Worker isntallieren: Code aus dem WWW kopiert --> Macht App installierbar

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

let x= 42;

//Installationsprompt

function install() {

  let params = new URLSearchParams(document.location.search.substring(1));
  first = parseInt(params.get("first"), 10);
  
  if (first == 123){
  x=666;
  document.getElementById("firefox-prompt").style.display = "block";
  document.getElementById("android-prompt").style.display = "block";
    }
}
install();


function app(){

//Link speichern
let link = "https://www.soscisurvey.de/emotrack2/?q=emotrack&s=";
console.log(link);

//SERIAL
//aus SMS/Weiterleitungslink
  
let params1 = new URLSearchParams(document.location.search.substring(1));
let serial = parseInt(params1.get("s"), 10);
console.log(serial);
  
//aus lokalem Speicher

if(isNaN(serial)){
serial = localStorage.getItem('serial');
}  
console.log(serial);

localStorage.setItem('serial', serial);
console.log(serial);

let sosci_link = link+serial;
console.log(sosci_link);
if (x == 42) {window.location.href = sosci_link;}
  
}
app();




