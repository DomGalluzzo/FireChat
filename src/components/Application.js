import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Container } from "react-bootstrap";

import SignIn from "./SignIn";
import Navigation from "./Navigation";

import MessagesBox from "./MessagesBox";

const Application = () => {
	const [user] = useAuthState(auth);

	return (
		<Container className="main-container p-0">
			<Container className="navigation-container">
				<Navigation user={user} />
			</Container>
			<Container className="user-check-container p-0">
				{user ? <MessagesBox /> : <SignIn />}
			</Container>
		</Container>
	);
};

export default Application;
