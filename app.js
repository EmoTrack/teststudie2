
/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

let link1 = "www.example.de/?s=";

let link2 = "www.example.de/?s=";

let link3 = "www.example.de/?s=";

serial = String(serial);

link1 = link1+serial;

alert(link1);



