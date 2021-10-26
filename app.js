
/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

let params = new URLSearchParams(document.location.search.substring(1));
let key = params.get("serial"); 

localStorage.setItem('serial', key)

let serial = localStorage.getItem('serial')

alert(serial);



