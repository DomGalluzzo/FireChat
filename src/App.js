import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import SignIn from "./components/SignIn";
// import Burrito from "./components/Burrito";
import Chatroom from "./components/Chatroom";
import UserProvider from "./providers/userProvider";
import Application from "./components/Application";

function App() {
	// const [user] = useAuthState(auth);
	// const user = null;

	return (
		<UserProvider>
			<Application />
		</UserProvider>
	);
}

export default App;

// return (
// 	<Container className="main-container">
// 		<div className="App">{user ? <Chatroom /> : <SignIn />}</div>
// 	</Container>
// );
