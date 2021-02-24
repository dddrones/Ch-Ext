console.log("i'm here, i'm here!!!");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request.message);
  	var imgf1 = request.message;
  	$("body").prepend("<img	src="	+	imgf1	+	"	class='planted'>");
  }
);
