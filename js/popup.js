function updateKeywords(){
    var adds = document.getElementById("AddKeyWord").value
    var dels = document.getElementById("RemoveKeyWord").value
    chrome.runtime.sendMessage({method: "updateUrlList", adds: adds, dels: dels}, function(response){
	});
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("popup_btn").addEventListener("click", updateKeywords);
});
