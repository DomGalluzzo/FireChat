import React from "react";

import "firebase/auth";
import "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import { Container } from "react-bootstrap";

// import SignIn from "./components/SignIn";
// import Burrito from "./components/Burrito";
import Chatroom from "./components/Chatroom";

function App() {
	return (
		<Container className="main-container">
			<div className="App">
				<Chatroom />
			</div>
		</Container>
	);
}

export default App;
