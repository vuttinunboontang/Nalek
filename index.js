async function main() {
  liff.ready.then(() => {
      if (liff.getOS() === "ios") {
          
      }
      if (liff.isInClient()) {
          getUserProfile()
      }
  })


  await liff.init({liffId: "2000030741-2WGZeb9Z", withLoginOnExternalBrowser: true })
}
main()

var database = firebase.database();

async function getUserProfile() {
  const profile = await liff.getProfile()
  document.getElementById("pictureUrl").src = profile.pictureUrl
  document.getElementById("userId").append(profile.userId)
  document.getElementById("statusMessage").append(profile.statusMessage)
  document.getElementById("displayName").append(profile.displayName)
  document.getElementById("docodedIDToken").append(liff.getDecodedIDToken().email)
  var userData = {
    pictureUrl: profile.pictureUrl,
    userId: profile.userId,
    displayName: profile.displayName,
    email: liff.getDecodedIDToken().email
  };
}

database.ref("users").push(userData)
  .then(function() {
    console.log("Data saved successfully.");
  })
  .catch(function(error) {
    console.log("Error:", error);
  });