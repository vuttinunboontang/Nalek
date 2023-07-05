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

async function getUserProfile() {
    const profile = await liff.getProfile()
    document.getElementById("PictureUrl").src = profile.PictureUrl
    document.getElementById("userId").append(profile.userId)
    document.getElementById("statusMessage").append(profile.statusMessage)
    document.getElementById("displayName").append(profile.displayName)
    document.getElementById("docodedIDToken").append(liff.getDecodedIDToken().email)
  }