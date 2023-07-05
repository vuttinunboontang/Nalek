var firebaseConfig = {
  apiKey: "AIzaSyBOvqgllXKzKrWxfTtJTDHEObrXIuPfpt0",
  authDomain: "bghstore-35361.firebaseapp.com",
  databaseURL: "https://bghstore-35361-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bghstore-35361",
  storageBucket: "bghstore-35361.appspot.com",
  messagingSenderId: "612144978492",
  appId: "1:612144978492:web:ad0f4e24c6ceab9e484139",
  measurementId: "G-M86QP3WMFQ"
};

firebase.initializeApp(firebaseConfig);

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
  document.getElementById("pictureUrl").src = profile.pictureUrl
  document.getElementById("userId").append(profile.userId)
  document.getElementById("statusMessage").append(profile.statusMessage)
  document.getElementById("displayName").append(profile.displayName)
  document.getElementById("docodedIDToken").append(liff.getDecodedIDToken().email)
  
  saveDataToDatabase({
    pictureUrl: profile.pictureUrl,
    userId: profile.userId,
    displayName: profile.displayName,
    email: liff.getDecodedIDToken().email
  });
}

function saveDataToDatabase(data) {
  // สร้างรายการใหม่ในฐานข้อมูล
  const newRef = database.ref('ชื่อโหนดในฐานข้อมูล').push();

  // กำหนดค่าข้อมูลให้กับรายการใหม่
  newRef.set(data)
    .then(() => {
      console.log('บันทึกข้อมูลเรียบร้อยแล้ว');
    })
    .catch((error) => {
      console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', error);
    });
}

