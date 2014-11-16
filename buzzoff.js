

function buzzoff(){

	var urlList = [ "www.buzzfeed.com", "www.upworthy.com", "elitedaily.com", "totalfratmove.com", "totalsororitymove.com", "postgradproblems.com", "www.playbuzz.com", "bzfd.it", "facebook.com/buzzfeed","thoughtcatalog.com", "upworthy.com" ];
	var stories = document.querySelectorAll("._4-u2");
	var story;
	for(var i=0; i < stories.length; i++){
		story = stories[i];
		killList(urlList, story);
		}
	}

//Creates array of stories and checks for blacklisted urls, sends blacklisted urls to killLink
function killItems(item){
	var links = item.getElementsByTagName("a");
	for(var k=0; k < links.length; k++){
		var link = links[k];
		var href = link.href.toLowerCase();
		// decide which type of link it is
		var linkType = null;
		if (href.indexOf("facebook.com/buzzfeed") !== -1 ){
		    linkType = "page link";
		    }
		else if (href.indexOf("bzfd.it") !== -1 ){
		    linkType = "shortened link";
		    }
		else if (href.indexOf("buzzfeed.com") !== -1 ){
		   	linkType = "regular link";
		}
		// kill the story that contains this link
		if(linkType !== null){
	      killLink(item);
	    }
	  }

}
function killList(urls, item){
	var links = item.getElementsByTagName("a");
	for(var k=0; k < links.length; k++){
		var link = links[k];
		var href = link.href.toLowerCase();
		// decide which type of link it is
		var linkType = null;
		for(var i=0; i < urls.length; i++){
			if (href.indexOf(urls[i]) !== -1 ){

				killLink(item);
				return;
			}
		}
		// kill the story that contains this link
	  }

}

// function killList(urls, item)
// {
// 	var links = item.getElementsByTagName("a");
// 	var linkfound= false;
// 	var href = links.href.toLowerCase();
// 	var i=0;
// 	alert(urls.length);
// 	for(var k=0; k < urls.length; k++){
// 		if (href.indexOf(urls[i]) !== -1 ){
// 			killLink(item);
// 			return;
// 		}
// 	}

// }


//Hides the story containing the link with a blacklisted string
function killLink(item){

	item.style.opacity = "0.0";
	item.style.display = "None";

}


buzzoff();
document.addEventListener("scroll", buzzoff);

