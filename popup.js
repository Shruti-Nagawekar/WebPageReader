document.getElementById('readButton').addEventListener('click', () => {
  const speed = document.getElementById('speedControl').value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
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
      args: [parseFloat(speed)]
    });
  });
});

// Update the speed value display
document.getElementById('speedControl').addEventListener('input', (event) => {
  document.getElementById('speedValue').textContent = event.target.value + 'x';
});
