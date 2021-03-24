//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();