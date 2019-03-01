route.setSelector(".content");

// update .active class
var updateActive = (hrefSelector) => {
	// remove all classes
	$(".menu-area a").removeClass("active");
	// add new class
	$("a[href=\"" + hrefSelector + "\"]").addClass("active");
}

route.disableAnchors(updateActive);

route.addPath("login.html", "fs");
route.addPath("index.html", "fs");
route.addPath("instances.html", "fs")

// default page
route.loadPath("index.html");
