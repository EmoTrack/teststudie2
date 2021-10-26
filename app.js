
/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

let params = new URLSearchParams(document.location.search.substring(1));
let first = parseInt(params.get("first"), 10);

function fun() {
  
let params = new URLSearchParams(document.location.search.substring(1));
let key = params.get("serial"); 
localStorage.setItem('serial', key);
}

if (first == 123) fun();

let serial = localStorage.getItem('serial');
serial = String(serial);

let link1 = "https://www.soscisurvey.de/demotrack/?q=EMA_event&s=";

let link2 = "https://www.soscisurvey.de/demotrack/?q=eat&s=";

let link3 = "https://www.soscisurvey.de/demotrack/?q=emi&s=";

link1 = link1+serial;
link2 = link2+serial;
link3 = link3+serial;   
     
document.write("<table><tr><td>"+"EmoTrack".link(link1)+"</td></tr><tr><td>"+"eatMotion".link(link2)+"</td></tr><tr><td>"+"EMI".link(link3)+"</td></tr></table>");
  
