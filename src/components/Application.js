import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Container } from "react-bootstrap";

import SignIn from "./SignIn";
import Navigation from "./Navigation";

import Chatroom from "./Chatroom";

const Application = () => {
	const [user] = useAuthState(auth);

	return (
		<Container className="main-container p-0">
			<Navigation user={user} />

			{user ? <Chatroom /> : <SignIn />}
		</Container>
	);
};

export default Application;
