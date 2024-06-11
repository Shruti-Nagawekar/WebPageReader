document.getElementById('readButton').addEventListener('click', () => {
  const speed = document.getElementById('speedControl').value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.runtime.sendMessage({
      type: 'readPage',
      tabId: tabs[0].id,
      speed: parseFloat(speed)
    });
  });
});

document.getElementById('speedControl').addEventListener('input', (event) => {
  document.getElementById('speedValue').textContent = event.target.value + 'x';
});
