import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Container, Navbar } from "react-bootstrap";

import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Chatroom from "./Chatroom";

const Application = () => {
	const [user] = useAuthState(auth);

	return (
		<Container>
			<Navbar>
				<SignOut />
			</Navbar>
			{user ? <Chatroom /> : <SignIn />}
		</Container>
	);
};

export default Application;
