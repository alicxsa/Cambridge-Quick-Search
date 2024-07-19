chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "lookupInCambridge",
      title: "Look up in Cambridge Dictionary",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "lookupInCambridge" && info.selectionText) {
      const word = encodeURIComponent(info.selectionText.trim());
      const url = `https://dictionary.cambridge.org/dictionary/english/${word}`;
      
      chrome.windows.create({
        url: url,
        type: "popup",
        width: 500,
        height: 600
      });
    }
  });  