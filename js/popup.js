console.log("hello hello!")

	var imgf1 = chrome.runtime.getURL("../images/f_final.png");
	var imgp1 = chrome.runtime.getURL("../images/p_final.png");
	var imgs1 = chrome.runtime.getURL("../images/s_final.png");


$('#fbutton').on('click', fplant);
  	$("imgp1").hide();
function fplant () {
		chrome.tabs.query({active:	true,	currentWindow:	true},	function(tabs)	{
	 		chrome.tabs.sendMessage(tabs[0].id,	{message: imgf1});
});
}

$('#pbutton').on('click', pplant);
function pplant () {
		chrome.tabs.query({active:	true,	currentWindow:	true},	function(tabs)	{
	 		chrome.tabs.sendMessage(tabs[0].id,	{message: imgp1});
});
}

$('#sbutton').on('click', splant);
function splant () {
		chrome.tabs.query({active:	true,	currentWindow:	true},	function(tabs)	{
	 		chrome.tabs.sendMessage(tabs[0].id,	{message: imgs1});
});
}