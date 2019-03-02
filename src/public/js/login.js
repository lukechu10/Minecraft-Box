var signIn = () => {
  return new Promise((resolve, reject) => {
    // check if form is filled up:
    if ($("#email-input").val() == "" || $("#password-input").val() == ""){
      reject("Form incomplete")
    }
    // all fields are filled up, continue by sending credentials to mojang auth server:
    else {
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://authserver.mojang.com/authenticate",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
        },
        "processData": false,
        "data": JSON.stringify({
          agent: {
            name: "Minecraft",
            version: 1
          },
          username: $("#email-input").val(),
          password: $("#password-input").val(),
          requestUser: true})
      }

      $.ajax(settings).done((response) => {
        console.log(response);
        // success, save information
        resolve(response);
      }).fail((xhr, status) => {
        if(xhr.status == 403) {
          reject("Invalid credentials")
        }
        else {
          reject("An Unknown error happend. Please create a new pull request on GitHub")
        }
      });
    }
  });
}

$("#login-in-button").click(async() => {
  try {
    var authToken = await signIn();
    // save auth tokens from mojang
    auth.set(authToken);
    // set signedIn to true
    auth.set("signedIn", true);
    alert("You have been successfully signed in");
    route.loadPath("index.html");
    updateActive("index.html");
    return;
  }
  catch (err){
    console.error(err);
    alert(err);
    return;
  }
});
