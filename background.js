chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'readPage') {
    chrome.scripting.executeScript({
      target: { tabId: message.tabId },
      func: (speed) => {
        function getTextFromPage() {
          let bodyText = document.body.innerText;
          return bodyText;
        }

        function readText(text, speed) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'en-US';
          utterance.rate = speed;
          window.speechSynthesis.speak(utterance);
        }

        const pageText = getTextFromPage();
        readText(pageText, speed);
      },
      args: [message.speed] // Ensure message.speed is passed correctly
    });
  }
});
