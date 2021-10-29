const CACHE_NAME1 = "auth";
const TOKEN_KEY1 = "token";
const FAKE_TOKEN1 = "sRKWQu6hCJgR25lslcf5s12FFVau0ugi";

const FAKE_ENDPOINT = "/fake-endpoint";

const saveToken = async (token: string) => {
  try {
    const cache = await caches.open(CACHE_NAME);
    const responseBody = JSON.stringify({
      [TOKEN_KEY]: token
    });
    const response = new Response(responseBody);
    await cache.put(FAKE_ENDPOINT, response);
    console.log("Token saved! 🎉");
  } catch (error) {
    // It's up to you how you resolve the error
    console.log("saveToken error:", { error });
  }
};


const getToken = async () => {
  try {
    const cache = await caches.open(CACHE_NAME);
    const response = await cache.match(FAKE_ENDPOINT);

    if (!response) {
      return null;
    }

    const responseBody = await response.json();
    return responseBody[TOKEN_KEY];
  } catch (error) {
    // Gotta catch 'em all
    console.log("getToken error:", { error });
  }
};

const displayCachedToken = async () => {
  const cachedToken = await getToken();
  console.log({ cachedToken });
};

// Uncomment the line below to save the fake token
// saveToken(FAKE_TOKEN);

displayCachedToken();

/* Only register a service worker if it's supported */
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

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
    
var isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator.standalone);

if (isIOS && (first == 123)) {
document.getElementById("ios-prompt").style.display = "block";
}


document.write("<table><tr><td>"+"EmoTrack".link(link1)+"</td></tr><tr><td>"+"eatMotion".link(link2)+"</td></tr><tr><td>"+"EMI".link(link3)+"</td></tr></table>");
