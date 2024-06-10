function getTextFromPage() {
    let bodyText = document.body.innerText;
    return bodyText;
  }
  
  function readText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  }
  
  const pageText = getTextFromPage();
  readText(pageText);
  