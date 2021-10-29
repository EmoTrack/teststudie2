
/* Only register a service worker if it's supported */
//var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isIOS = new Boolean;

if ('serviceWorker' in navigator) {
  if (!isIOS) {navigator.serviceWorker.register('sw.js');}
  if (isIOS) {navigator.serviceWorker.register('sw_apple.js');}

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
    
var isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator.standalone);

if (isIOS && (first == 123)) {
document.getElementById("ios-prompt").style.display = "block";
let params2 = new URLSearchParams(document.location.search.substring(1));
let key1 = params2.get("serial");
const SHARED_DATA_ENDPOINT = '/token';
fetch(SHARED_DATA_ENDPOINT, { method: "POST", body: JSON.stringify(serial)});
}

if (isIOS && (first != 123)) {
fetch(SHARED_DATA_ENDPOINT).then(response => response.json()).then(data => {
     console.log('Got', data, 'from cache');
     link1 = link1+response+txt;
});
}

document.write("<table><tr><td>"+"EmoTrack".link(link1)+"</td></tr><tr><td>"+"eatMotion".link(link2)+"</td></tr><tr><td>"+"EMI".link(link3)+"</td></tr></table>");
