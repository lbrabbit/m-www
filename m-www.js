/*
1. Output activeTab URL to log (if line 10 uncommented)
2. Loop through matchArrary, toggle URL if match

matchArray is defined in regex.js
*/
browser.browserAction.onClicked.addListener((tab) => {
  // requires the "tabs" or "activeTab" permission

  //console.log(tab.url, tab.id);
  //console.log(Object.keys(tab));

  var i = matchArray.length;
  var noMatch = true;

  while(i-- && noMatch) {
    var matchEle = matchArray[i];
    //console.log(i,matchEle[0],matchEle[1]);   
    noMatch=!matchEle[0].test(tab.url)
    if (!noMatch) {
      //console.log(i, matchEle[0],matchEle[1], tab.url.replace(matchEle[0],matchEle[1]));  
      browser.tabs.update({url: tab.url.replace(matchEle[0],matchEle[1])});
    }
  } 
});
