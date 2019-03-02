const Store = require('electron-store');
const auth = new Store({
  name: "auth",
  fileExtension: "cfg",
  encryptionKey: "encryptionKey",
  defaults: {
    signedIn: false
  }
});

route.setSelector(".content");

// update .active class
var updateActive = (hrefSelector) => {
	// remove all classes
	$(".menu-area a").removeClass("active");
	// add new class
	$(".menu-area a[href=\"" + hrefSelector + "\"]").addClass("active");

	// update auth link
	if(auth.get("signedIn") == true) {
		$("#authLink").attr("href", "signout.html");
		$("#authLink").html("Sign Out");
	}
	else {
		$("#authLink").attr("href", "login.html");
		$("#authLink").html("Log In");
	}
}

route.disableAnchors(updateActive);

route.addPath("login.html", "fs");
route.addPath("index.html", "fs");
route.addPath("instances.html", "fs");
route.addPath("youtube.html", "fs");
route.addPath("signout.html", "fs");

// default page
route.loadPath("index.html");
// update log in status
$(() => {
	updateActive("index.html");
});
