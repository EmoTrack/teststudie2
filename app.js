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

//Link speichern
let link = "https://www.soscisurvey.de/emotrack2/?q=emotrack&s=";

//Serial

function save(){

//aus SMS/Weiterleitungslink
  
let params1 = new URLSearchParams(document.location.search.substring(1));
let serial = parseInt(params1.get("s"), 10);

//aus lokalem Speicher

if(isNaN(serial)){
serial = localStorage.getItem('serial');
}  

localStorage.setItem('serial', serial);
  
}

save();

Console.log()(serial);


//Installationsprompt

function install() {

  let params = new URLSearchParams(document.location.search.substring(1));
  first = parseInt(params.get("first"), 10);
  
  if (first == 123){
  document.getElementById("firefox-prompt").style.display = "block";
  document.getElementById("android-prompt").style.display = "block";
    }
}
install();

//Automatische Weiterleitung falls der Link ?s= inkludiert (bei den SMS-Benachrichtigungen ist das der Fall)

function refer() {

if(first=!123){
let sosci_link = link+serial;
window.location.href = sosci_link;
}
}
refer();
 




