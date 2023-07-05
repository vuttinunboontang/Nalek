import liff from "@line/liff"

async function getUserProfile() {
  const profile = await liff.getProfile()
  document.getElementById("PictureUrl").src = profile.PictureUrl
  document.getElementById("userId").append(profile.userId)
  document.getElementById("statusMessage").append(profile.statusMessage)
  document.getElementById("displayName").append(profile.displayName)
  document.getElementById("docodedIDToken").append(liff.getDecodedIDToken().email)
}
async function main() {
  await liff.init({ liffId: "2000030741-2WGZeb9Z", withLoginOnExternalBrowser: true })
  if (liff.isLoggedIn()) {
      getUserProfile()
  }
}

main()