function buzzoff(){

	var stories = document.querySelectorAll("._4-u2");
	var story;
	alert(stories.length);
	for(var i=0; i < stories.length; i++){
		story = stories[i];
		killItems(story);
		}
	}

	// stories = document.getElementsByClassName("_4-u2 mbm _5jmm _5pat _5v3q _5x16");
	// //alert(stories);
	// for(var j=0; i < stories.length; i++){
	// 	story = stories[j];
	// 	killStories(story);
	// }

	// stories = document.getElementsByClassName("timelineUnitContainer pagesTimelinePinpost");
	// //alert(stories);
	// //alert(stories[0].toString());
	// for(var k=0; i < stories.length; i++){
	// 	story = stories[k];
	// 	killStories(story);
	// }
	
	// stories = document.getElementsByClassName("timelineUnitContainer");
	// //alert(stories);
	// //alert(stories[0].toString());
	// for(var l=0; i < stories.length; i++){
	// 	story = stories[l];
	// 	killStories(story);
	// }

}



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



function killLink(item){

	// var post;
	// post = item;
	// for(var i=0; i < elems.length; i++){
	//     post = elems[i];
	    alert(item.innerHTML);
	    
	   //if (item.value.toString().indexOf("buzzfeed.com") !== -1){
	    	item.style.opacity = "0.0";
	    	item.style.display = "None";
    	//}
    	
	//}
}

alert("you piece of fucking shit fucking work you cock");

buzzoff();


