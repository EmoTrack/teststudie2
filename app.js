
/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}


var iosPrompt = document.getElementById("ios-prompt");
iosPrompt.style.display = "hidden";

  

