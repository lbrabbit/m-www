//All the Regex Part here
//Regex pair lower down this file will be processed earlier. i.e. Bigger array index.
var matchArray=[
  [/^(http|https)\:\/\/m\./,"$1://www."],
  [/^(http|https)\:\/\/www\./,"$1://m."],  
  [/^(http|https)\:\/\/m\.mingpao\./,"$1://news.mingpao."],
  [/^(http|https)\:\/\/news\.mingpao\./,"$1://m.mingpao."],
  [/http\:\/\/hk\.apple\.nextmedia\.com.+\/(20\d+)\/(\d+)$/,"http://hkm.appledaily.com/detail.php?guid=$2&issue=$1"]
];

/* ScratchPad Code
var testStr ="http://hk.apple.nextmedia.com/realtime/news/20171021/57358535";
var regexp = /http\:\/\/hk\.apple\.nextmedia\.com.+\/(20\d+)\/(\d+)$/;
var repl = "http://hkm.appledaily.com/detail.php?guid=$1&issue=$2"
var matchRes = testStr.match(regexp);

console.info(matchRes.toString());
console.log(testStr.replace(regexp,repl));
*/

