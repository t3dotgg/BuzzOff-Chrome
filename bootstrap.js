chrome.runtime.onInstalled.addListener(function(details) {
    localStorage["BuzzOffBool"] = true;
});

// Listen for any changes to the URL of any tab.
// see: http://developer.chrome.com/extensions/tabs.html#event-onUpdated
chrome.tabs.onUpdated.addListener(function(id, info, tab){

    //Checks if loading is complete
    if (tab.status !== "complete"){
        console.log("Not loaded");
        return;
    }
    if (tab.url.toLowerCase().indexOf("facebook.com") === -1){
        console.log("Not Facebook");
        return;
    }

    if (tab.url.toLowerCase().indexOf("facebook.com/buzzfeed") !== -1){
        chrome.tabs.update(tab.id, {url: "http://www.facebook.com/"});
    }

    //Show PageAction
    chrome.pageAction.show(tab.id);

});

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.pageAction.show(tab.id);
});