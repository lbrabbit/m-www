//All the Regex Part here
//Regex pair lower down this file will be processed earlier. i.e. Bigger array index.
var matchArray=[
  [/^(http|https)\:\/\/m\./,"$1://www."],
  [/^(http|https)\:\/\/www\./,"$1://m."],  
  [/^(http|https)\:\/\/m\.mingpao\./,"$1://news.mingpao."],
  [/^(http|https)\:\/\/news\.mingpao\./,"$1://m.mingpao."]
];
