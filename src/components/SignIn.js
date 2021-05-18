import React from "react";
import { Container, Button } from "react-bootstrap";
import { signInWithGoogle } from "../firebase";

const SignIn = () => {
	return (
		<Container className="sign-in-container">
			<Button variant="success" onClick={signInWithGoogle}>
				Sign in with Google
			</Button>
		</Container>
	);
};

export default SignIn;
