function buzzoff(){

  stories = document.getElementsByClassName("_4-u2 mbm _5jmm _5pat _5v3q _5x16 _x72");
  for(var i=0; i < stories.length; i++){
    var story = stories[i];
    killStories(post);
  }

  stories = document.getElementsByClassName("_4-u2 mbm _5jmm _5pat _5v3q _5x16");
  for(var i=0; i < stories.length; i++){
    var post = stories[i];
    killStories(post);
  }

  stories = document.getElementsByClassName("timelineUnitContainer pagesTimelinePinpost");
  for(var i=0; i < stories.length; i++){
    var post = stories[i];
    killStories(post);
  }

}

function killStories(item){
	
  elems = item.getElementsByClassName("fsm fwn fcg");
  for(var i=0; i < elems.length; i++){
    var post = stories[i];
    if (post.value.equals("www.buzzfeed.com")){
    	item.style.opacity = "0.0";
  		item.style.display = "None";
    }

}
