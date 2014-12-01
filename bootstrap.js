var tempBool = new Boolean();
tempBool = true;

function checkForValidUrl(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
    activated[tabID] = false;
};

chrome.runtime.onInstalled.addListener(function(details) {
    localStorage.setItem("buzzoff_bool", tempBool);
     if(tempBool=== false){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'images/icongrey.png'});
    }

    if(tempBool=== true){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'images/icon.png'});
        chrome.tabs.executeScript(null, {"file": "buzzoff.js"});
    }
});

// Listen for any changes to the URL of any tab.
// see: http://developer.chrome.com/extensions/tabs.html#event-onUpdated
chrome.tabs.onUpdated.addListener(function(id, info, tab){

    tempBool = localStorage.getItem("buzzoff_bool");
    //Checks if loading is complete
    if (tab.status !== "complete"){
        console.log("Not loaded");
        return;
    }
    if (tab.url.toLowerCase().indexOf("facebook.com") === -1){
        console.log("Not Facebook");
        return;
    }

    if(tempBool=== false){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'images/icongrey.png'});
    }

    if(tempBool=== true){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'images/icon.png'});
        chrome.tabs.executeScript(null, {"file": "buzzoff.js"});
    }

    if (tab.url.toLowerCase().indexOf("facebook.com/buzzfeed") !== -1){
       chrome.tabs.update(tab.id, {url: "http://www.facebook.com/"});
    }

    //Show PageAction
    chrome.pageAction.show(tab.id);


});

chrome.pageAction.onClicked.addListener(function(tab) {
    
    //chrome.pageAction.show(tab.id);

    tempBool = localStorage.getItem("buzzoff_bool");
    alert(localStorage["buzzoff_bool"]);
    if(tempBool){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'images/icongrey.png'});    
        tempBool = !tempBool;
        localStorage.setItem("buzzoff_bool"
) = tempBool;
        chrome.tabs.getSelected(null, function(tab) {
            var code = 'window.location.reload();';
            chrome.tabs.executeScript(tab.id, {code: code});
        });
    }else{
        chrome.pageAction.setIcon({tabId: tab.id, path: 'images/icon.png'});
        tempBool = !tempBool;
        localStorage.setItem("buzzoff_bool"
) = tempBool;
        chrome.tabs.executeScript(null, {"file": "buzzoff.js"});    
    }



});