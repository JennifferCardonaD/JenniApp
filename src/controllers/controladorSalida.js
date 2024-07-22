    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'
  
  
const firebaseConfig = {
    apiKey: "AIzaSyAEBhWm_g3O2tWacGMBUX4l9sI7VTy7G1k",
    authDomain: "loguinjennapi.firebaseapp.com",
    projectId: "loguinjennapi",
    storageBucket: "loguinjennapi.appspot.com",
    messagingSenderId: "652688673604",
    appId: "1:652688673604:web:0532166abe2cf623242511",
    measurementId: "G-6VVMTBH5C1"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
let avatar=document.getElementById("avatar")
let botonSalir=document.getElementById("botonsalir")
 
//utilizar la información del usuario logueado
const auth=getAuth()
onAuthStateChanged(auth, (user) => {
    if (user) {
        let uid=user.uid
        avatar.classList.remove("invisible")
        avatar.textContent=user.email
    }else{
 
    }
})
 
botonSalir.addEventListener("click",function(){
    signOut(auth).then(()=>{
        avatar.classList.add("invisible")
        window.location.href="./views/login.html"
    })
})

