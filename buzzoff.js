function buzzoff(){

	var stories = document.getElementsByClassName("_4-u2 mbm _5jmm _5pat _5v3q _5x16 _x72");
	//alert(stories);
	var story;
	for(var i=0; i < stories.length; i++){
		story = stories[i];
		killStories(story);
	}

	stories = document.getElementsByClassName("_4-u2 mbm _5jmm _5pat _5v3q _5x16");
	//alert(stories);
	for(var j=0; i < stories.length; i++){
		story = stories[j];
		killStories(story);
	}

	stories = document.getElementsByClassName("timelineUnitContainer pagesTimelinePinpost");
	//alert(stories);
	//alert(stories[0].toString());
	for(var k=0; i < stories.length; i++){
		story = stories[k];
		killStories(story);
	}
	
	stories = document.getElementsByClassName("timelineUnitContainer");
	//alert(stories);
	//alert(stories[0].toString());
	for(var l=0; i < stories.length; i++){
		story = stories[l];
		killStories(story);
	}

}

function killStories(item){

	var elems = item.getElementsByClassName("fsm fwn fcg");

	var post;
	for(var i=0; i < elems.length; i++){
	    post = elems[i];
	    alert(post.innerHTML)
	    
	    if (post.value.toString().indexOf("buzzfeed.com") !== -1){
	    	item.style.opacity = "0.0";
	    	item.style.display = "None";
    	}
    	
	}
}

buzzoff();


