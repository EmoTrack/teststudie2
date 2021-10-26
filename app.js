
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

if (first == 123) fun()

let serial = localStorage.getItem('serial');
serial = String(serial);

let link1 = "https://www.soscisurvey.de/demotrack/?q=EMA_event&s=";

let link2 = "https://www.soscisurvey.de/demotrack/?q=eat&s=";

let link3 = "https://www.soscisurvey.de/demotrack/?q=emi&s=";

link1 = link1+serial;
link2 = link1+serial;
link3 = link1+serial;   
     
document.write("<table>
               <tr><td>"+"EmoTrack".link(link1)+"</td></tr>
               <tr><td>"+"eatMotion".link(link2)+"</td></tr>
               <tr><td>"+"EMI".link(link2)+"</td></tr>
              </table> 
    <div class="ios-prompt">
    <p>To install this Web App in your iPhone/iPad press <img src="https://svgshare.com/i/AFm.svg" style="display: inline-block; margin-top: 4px; margin-bottom: -4px; height: 20px; width: auto;"> and then Add to Home Screen.
    <img src="https://svgshare.com/i/AEL.svg" style="display: inline-block; margin-top: 4px; margin-bottom: -4px; height: 20px; width: auto;"></p>
    </div>");
