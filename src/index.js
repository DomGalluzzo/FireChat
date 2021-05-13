import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const firebaseConfig = {
	apiKey: "AIzaSyDFwyYD_uLw1raabTL0YV_RoXsrHD_HJz0",
	authDomain: "dgalluzzo-firechat.firebaseapp.com",
	projectId: "dgalluzzo-firechat",
	storageBucket: "dgalluzzo-firechat.appspot.com",
	messagingSenderId: "389295578741",
	appId: "1:389295578741:web:a55226e359775abc51e23c",
	measurementId: "G-3WV637MYWF",
};

ReactDOM.render(
	<FirebaseAppProvider firebaseConfig={firebaseConfig}>
		<App />
	</FirebaseAppProvider>,
	document.getElementById("root")
);

reportWebVitals();
