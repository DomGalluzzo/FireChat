import React from "react";
import { useFirestoreDocData, useFirestore } from "reactfire";
import "firebase/auth";
import "firebase/firestore";
import "./App.css";

import SignIn from "./components/SignIn";

const Burrito = () => {
	const burritoRef = useFirestore().collection("tryreactfire").doc("burrito");

	const { status, data } = useFirestoreDocData(burritoRef);

	if (status === "loading") {
		return <p>Fetching burrito flavor...</p>;
	}

	return <p>The burrito is {data.yummy ? "good" : "bad"}!</p>;
};

function App() {
	return (
		<div className="App">
			<SignIn />
			<Burrito />
		</div>
	);
}

export default App;
