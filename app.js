
/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

let params = new URLSearchParams(document.location.search.substring(1));
let key = params.get("serial"); 

localStorage.setItem('serial', key);

let serial = localStorage.getItem('serial');

let link1 = "https://www.example.de/?s=";

let link2 = "https://www.example.de/?s=";

let link3 = "https://www.example.de/?s=";

serial = String(serial);

link1 = link1+serial;       
     
document.write("<p>Link: " + "EmoTrack".link(link1) + "</p>");


