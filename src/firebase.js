import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDFwyYD_uLw1raabTL0YV_RoXsrHD_HJz0",
	authDomain: "dgalluzzo-firechat.firebaseapp.com",
	databaseURL: "https://dgalluzzo-firechat-default-rtdb.firebaseio.com",
	projectId: "dgalluzzo-firechat",
	storageBucket: "dgalluzzo-firechat.appspot.com",
	messagingSenderId: "389295578741",
	appId: "1:389295578741:web:a55226e359775abc51e23c",
	measurementId: "G-3WV637MYWF",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
	auth.signInWithPopup(provider);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
