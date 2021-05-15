import React from "react";

import "firebase/auth";
import "firebase/firestore";
import "./App.css";

import SignIn from "./components/SignIn";
import Burrito from "./components/Burrito";

function App() {
	return (
		<div className="App">
			<SignIn />
			<Burrito />
		</div>
	);
}

export default App;
