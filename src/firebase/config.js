import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-analytics";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyDFwyYD_uLw1raabTL0YV_RoXsrHD_HJz0",
	authDomain: "dgalluzzo-firechat.firebaseapp.com",
	projectId: "dgalluzzo-firechat",
	storageBucket: "dgalluzzo-firechat.appspot.com",
	messagingSenderId: "389295578741",
	appId: "1:389295578741:web:a55226e359775abc51e23c",
	measurementId: "G-3WV637MYWF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
