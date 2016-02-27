var tempBool = new Boolean();
tempBool = true;
var default_urlList = [ "www.buzzfeed.com", "elitedaily.com", "passitdown.co", "postgradproblems.com", "www.playbuzz.com", "bzfd.it", "facebook.com/buzzfeed", "thoughtcatalog.com", "upworthy.com" ];
var urlList;

function checkForValidUrl(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
    activated[tabID] = false;
};

chrome.runtime.onInstalled.addListener(function(details) {
    localStorage["buzzoff_bool"] = true;
    chrome.tabs.onUpdated.addListener(cb_tabOnUpdated);
    chrome.runtime.onMessage.addListener(cb_runtimeOnMessage);
});

function cb_runtimeOnMessage(request, sender, sendResponse) {
    // Updates chrome.storage.sync
    if (request.method == "updateUrlList") {
        if (typeof urlList === 'undefined') {
            chrome.storage.sync.get("urlList", function(data){
                urlList = data.urlList;
                // Set defaults if necessary
                if (typeof urlList === 'undefined') {
                    urlList = default_urlList;
                    console.log("Using default urlList");
                }
            });
        }
        // Do the adds and dels
		urlList.push(request.adds)
		var i = urlList.indexOf(request.dels)
		if (i > -1) {
			urlList.splice(i, 1);
		}
        // Update storage
        chrome.storage.sync.set({'urlList': urlList}, null);
        sendResponse(data);
    }
}

// Listen for any changes to the URL of any tab.
// see: http://developer.chrome.com/extensions/tabs.html#event-onUpdated
function cb_tabOnUpdated(id, info, tab) {

    //Checks if loading is complete
    if (tab.status !== "complete"){
        console.log("Not loaded");
        return;
    }
    else
    {
        console.log("Loaded");
    }
    
    if (tab.url.toLowerCase().indexOf("facebook.com") === -1){
        console.log("Not Facebook");
        return;
    }

    if(!tempBool){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'images/icongrey.png'});
    }

    if(tempBool){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'images/icon.png'});
    }

    if (tab.url.toLowerCase().indexOf("facebook.com/buzzfeed") !== -1){
       chrome.tabs.update(tab.id, {url: "http://www.facebook.com/"});
    }

    //Show PageAction
    chrome.pageAction.show(tab.id);

    if(tempBool){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'images/icon.png'});
        chrome.storage.sync.get("urlList", function(data){
            urlList = data.urlList;
            if (typeof urlList === 'undefined') {
                urlList = default_urlList;
            }
        });
        chrome.tabs.executeScript(tab.id, {"file": "js/buzzoff.js"}, function() {
            chrome.tabs.sendMessage(tab.id, JSON.stringify(urlList));
        });
    }
}

chrome.pageAction.onClicked.addListener(function(tab) {
    
    //chrome.pageAction.show(tab.id);

    if(tempBool){    
        chrome.pageAction.setIcon({tabId: tab.id, path: 'images/icongrey.png'});
        chrome.tabs.getSelected(null, function(tab) {
            var code = 'window.location.reload();';
            chrome.tabs.executeScript(tab.id, {code: code});
        });
    }else{
        chrome.pageAction.setIcon({tabId: tab.id, path: 'images/icon.png'});
        chrome.storage.sync.get("urlList", function(data){
            urlList = data.urlList;
        });
        chrome.tabs.executeScript(tab.id, {"file": "js/buzzoff.js"}, function() {
            chrome.tabs.sendMessage(tab.id, JSON.stringify(urlList));
        });
    }

    tempBool = !tempBool;


});
