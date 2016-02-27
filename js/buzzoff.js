var urlList;
chrome.runtime.onMessage.addListener(cb_runtimeOnMessage);
function cb_runtimeOnMessage(message, sender, sendResponse) {
    urlList = JSON.parse(message);
    document.addEventListener("scroll", buzzoff);
}
function buzzoff(event){
	var stories = document.querySelectorAll("._5jmm,._5pcr,._5und");
	var story;
	for(var i=0; i < stories.length; i++){
		story = stories[i];
		killList(urlList, story);
		}
}

function killList(urls, item){
	var links = item.getElementsByTagName("a");
	for(var k=0; k < links.length; k++){
		var link = links[k];
		var href = link.href.toLowerCase();
		for(var i=0; i < urls.length; i++){
			if (href.indexOf(urls[i]) !== -1 ){
		        // kill the story that contains this link
				killLink(item);
				return;
			}
		}
	  }
}

//Hides the story containing the link with a blacklisted string
function killLink(item){
	item.style.opacity = "0.0";
	item.style.display = "None";

}
