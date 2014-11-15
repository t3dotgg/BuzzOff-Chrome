function buzzoff(){

  stories = document.getElementsByClassName("_4-u2 mbm _5jmm _5pat _5v3q _5x16 _x72");
  for(var i=0; i < stories.length; i++){
    var story = stories[i];


  }

  stories = document.getElementsByClassName("_4-u2 mbm _5jmm _5pat _5v3q _5x16");
  for(var i=0; i < stories.length; i++){
    var post = stories[i];

  }

  stories = document.getElementsByClassName("timelineUnitContainer pagesTimelinePinpost");
  for(var i=0; i < stories.length; i++){
    var post = stories[i];
    killStories(post);

  }
}

function killStories(item){
  var links = item.getElementsByClassName("fsm fwn fcg");
  if (links.value.equals("www.buzzfeed.com")){
  	item.style.opacity = "0.0";
  	item.style.display = "None";
  }
 

    // kill the story that contains this link
    if(linkType !== null){
      killItem(item, linkType, pageType);
    }
  }
}
