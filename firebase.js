var firebaseConfig = {
    apiKey: "AIzaSyBOvqgllXKzKrWxfTtJTDHEObrXIuPfpt0",
    authDomain: "bghstore-35361.firebaseapp.com",
    projectId: "bghstore-35361",
    storageBucket: "bghstore-35361.appspot.com",
    messagingSenderId: "612144978492",
    appId: "1:612144978492:web:0dcc3347c147b8ef484139",
    measurementId: "G-43FNFVDVER"
};
  
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// สร้างอ็อบเจ็กต์ข้อมูลที่ต้องการบันทึก


// บันทึกข้อมูลลงใน Realtime Database
database.ref("users").push(data)
  .then(function() {
    console.log("Data saved successfully.");
  })
  .catch(function(error) {
    console.log("Error:", error);
});