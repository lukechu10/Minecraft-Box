const Store = require('electron-store');
// file for authentication
const auth = new Store({
  name: "auth",
  fileExtension: "cfg",
  encryptionKey: "encryptionKey",
  defaults: {
    signedIn: false
  }
});

// file for versions (offline use)
const versionList = new Store({
  name: "versionList",
  fileExtension: "cfg",
})

const shell = require("electron").shell;

route.setSelector(".spa-content");

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

  // update mc name
  updateName();
}

route.disableAnchors(updateActive);

route.addPath("login.html", "fs");
route.addPath("index.html", "fs");
route.addPath("instances.html", "fs");
route.addPath("youtube.html", "fs");
route.addPath("twitch.html", "fs");
route.addPath("signout.html", "fs");

// default page
route.loadPath("index.html");
// update log in status
$(() => {
	updateActive("index.html");
});

// get mc username and add to site
var updateName = () => {
  if(auth.get("signedIn") == true) {
    $("#mcName").text(auth.get("selectedProfile").name); // name stored in auth.cfg from mc api
    $("#mcFace").attr("src", "https://minotar.net/helm/" + auth.get("selectedProfile").id + "/100.png")
    $("#skinRender").attr("src", "https://minotar.net/armor/body/" + auth.get("selectedProfile").id + "/100.png")
    $("#userId").text(auth.get("selectedProfile").id)
  }
}
