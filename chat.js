
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCWatdFXcYGHn4nO1Ye4Jm12jE2OVh2CnQ",
    authDomain: "letschat-100-project.firebaseapp.com",
    projectId: "letschat-100-project",
    storageBucket: "letschat-100-project.appspot.com",
    messagingSenderId: "297746796532",
    appId: "1:297746796532:web:d00fce1fd1d12279b7b3a1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



