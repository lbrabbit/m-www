/*
1. Get activeTab URL
2. Toggle URL if match
*/
browser.browserAction.onClicked.addListener((tab) => {
  // requires the "tabs" or "activeTab" permission
  var m_re = /^https\:\/\/m\./
  var www_re = /^https\:\/\/www\./   
  console.log(tab.url, tab.id, m_re.test(tab.url), www_re.test(tab.url));
  //console.log(Object.keys(tab));
  
  if (m_re.test(tab.url))
    browser.tabs.update({url: tab.url.replace(m_re,"https://www.")});
  else if (www_re.test(tab.url))
    browser.tabs.update({url: tab.url.replace(www_re,"https://m.")});
  
});
