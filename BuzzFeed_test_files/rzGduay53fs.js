/*!CK:3308805284!*//*1408457537,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Uc+AY"]); }

__d("XGroupXoutSuggestionControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/browsegroups\/xout_suggestions\/",{id:{type:"Int",required:true},type:{type:"String",required:true},reason:{type:"String"},should_log:{type:"Bool"}});},null);
__d("GroupBrowseXoutHandler",["Event","AsyncRequest","CSS","DOM","XGroupXoutSuggestionControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k){var l={onclick:function(m,n,o,p,q){g.listen(m,'click',function(){var r=new k().setInt('id',n).setString('type',q).setBool('should_log',p).getURI();new h().setURI(r).send();var s=j.find(document,'#'+o);i.hide(s);});}};e.exports=l;},null);