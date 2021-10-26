
/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

function showIosInstall() {
        let iosPrompt = document.querySelector(".ios-prompt");
        iosPrompt.style.display = "none";
        });
      }
        showIosInstall();

  

