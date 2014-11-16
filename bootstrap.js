var tempBool = new Boolean();
tempBool = true;

function checkForValidUrl(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
    activated[tabID] = false;
};

chrome.runtime.onInstalled.addListener(function(details) {
    localStorage["buzzoff_bool"] = true;
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

    if(!tempBool){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'icongrey.png'});
    }

    if(tempBool){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'icon.png'});
    }

    if (tab.url.toLowerCase().indexOf("facebook.com/buzzfeed") !== -1){
        chrome.tabs.update(tab.id, {url: "http://www.facebook.com/"});
    }

    //Show PageAction
    chrome.pageAction.show(tab.id);

    if(tempBool){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'icon.png'});
        chrome.tabs.executeScript(null, {"file": "buzzoff.js"});
    }

});

chrome.pageAction.onClicked.addListener(function(tab) {
    
    //chrome.pageAction.show(tab.id);

    if(tempBool){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'icongrey.png'});
        //alert("not activated");
    }else{
        chrome.pageAction.setIcon({tabId: tab.id, path: 'icon.png'});
        //alert("activated");
    }

    tempBool = !tempBool;


});