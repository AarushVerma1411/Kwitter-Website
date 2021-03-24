var firebaseConfig = {
      apiKey: "AIzaSyCINXI7XhAzBaV8E1uSCGuAFuZLMskZupU",
      authDomain: "kwitter-a85cd.firebaseapp.com",
      databaseURL: "https://kwitter-a85cd-default-rtdb.firebaseio.com",
      projectId: "kwitter-a85cd",
      storageBucket: "kwitter-a85cd.appspot.com",
      messagingSenderId: "322544674849",
      appId: "1:322544674849:web:cb0f4c5aa1dcf3c6041b60"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name - " + Room_names);
                  row = "<div class='room_name'id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += rows
                  //End code
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}