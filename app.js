
/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

let params = new URLSearchParams(document.location.search.substring(1));
let first = parseInt(params.get("first"), 10);

function fun() {
  
let params1 = new URLSearchParams(document.location.search.substring(1));
let key = params1.get("serial"); 
localStorage.setItem('serial', key);
}

if (first == 123) fun();

let serial = localStorage.getItem('serial');
serial = String(serial);

let link1 = "https://www.soscisurvey.de/demotrack/?l=ger&d=";

let txt  = "&r=event";

let link2 = "https://www.soscisurvey.de/demotrack/?q=eat";

let link3 = "https://www.soscisurvey.de/demotrack/?q=emi";

link1 = link1+serial+txt;
  
document.write("<table><tr><td>"+"EmoTrack".link(link1)+"</td></tr><tr><td>"+"eatMotion".link(link2)+"</td></tr><tr><td>"+"EMI".link(link3)+"</td></tr></table>");
  
var isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator.standalone);
 console.log(isInStandaloneMode);
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (isIOS && !isInStandaloneMode) {
  document.getElementById("ios-prompt").style.display = "block"; 
}
