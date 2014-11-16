function buzzoff(){

	var stories = document.getElementsByClassName("_4-u2 mbm _5jmm _5pat _5v3q _5x16 _x72");
	alert(stories);
	var story;
	for(var i=0; i < stories.length; i++){
		story = stories[i];
		killStories(post);
	}

	stories = document.getElementsByClassName("_4-u2 mbm _5jmm _5pat _5v3q _5x16");
	alert(stories);
	for(var j=0; i < stories.length; i++){
		story = stories[i];
		killStories(post);
	}

	stories = document.getElementsByClassName("timelineUnitContainer pagesTimelinePinpost");
	alert(stories);
	alert(stories[0].toString());
	for(var k=0; i < stories.length; i++){
		story = stories[i];
		killStories(post);
	}

}

function killStories(item){

	var elems = item.getElementsByClassName("fsm fwn fcg");
	var post;
	for(var i=0; i < elems.length; i++){
	    post = stories[i];
	    if (post.value.equals("www.buzzfeed.com")){
	    	item.style.opacity = "0.0";
	    	item.style.display = "None";
    	}
	}
}

buzzoff();


