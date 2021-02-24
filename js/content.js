console.log("i'm here, i'm here!!!");

// if (navigator.storage && navigator.storage.persist) {
//   navigator.storage.persist().then(granted => {
//     if (granted)
//       alert("Storage will not be cleared except by explicit user action");
//     else
//       alert("Storage may be cleared by the UA under storage pressure.");
//   });
// }

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request.message1);
  	var imgf1 = request.message1;
  	// $('#planted').parent().append("<img	src="	+	imgf1	+	"	class='planted'>");
  	$("header").after("<img	src="	+	imgf1	+	"	class='planted'>");
  	$imgp1.hide();
  }
);
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request.message2);
  	var imgp1 = request.message2;
  	// $('#planted').parent().append("<img	src="	+	imgf1	+	"	class='planted'>");
  	$("header").after("<img	src="	+	imgp1	+	"	class='planted'>");
  }
);
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request.message3);
  	var imgs1 = request.message3;
  	// $('#planted').parent().append("<img	src="	+	imgf1	+	"	class='planted'>");
  	$("header").after("<img	src="	+	imgs1	+	"	class='planted'>");
  }
);


// $("body").on("click", function() {
// 	$("body").css("background-color", "#7C8557")

// });

// $("body").on("click", function() {
//     $("body").css("background-color", "#7C8557")
//     $("div.o3j99.n1xJcf.Ne6nSd").after("color1")
// });




// var img = new Image();
// img.src = 'images/f_1.png';
// img.load = function() {
// 	var canvas = document.createElement('canvas');
// 	document.body.appendChild(canvas);
// 	var contect = canvas.getContext('2d');
// 	context.drawImage(img, 0, 0);
// 	var data = context.getImageData(x, y, img.width, img.height).data;
// 	localStorage.setItem('image', data);
// };

// window.onload = function() {
//  var picture = localStorage.getItem('image');
//  var image = document.createElement('img');
//  image.src = picture;
//  document.body.appendChild(image);
// };


// var imgURL = chrome.runtime.getURL("images/f_final.png");
// var img2 = chrome.runtime.getURL("images/f_wilted.png");

// $("header").before("<img src=" + imgURL + "class='body'>");

// $("header").before("<img src=" + imgURL + "class='body'>");

// $img1.on("click", function() {
// 	$(this).hide();
// 	$img2.show();
// });

// $imgURL.show();

//so we want an image that will change to another image over a certain amount of time
//will have 6 imgs per plant (18 total)
//$one.on("click", function() { (for changing from wilted to watered)
// 	$(this).hide(); 
// 	$two.show();