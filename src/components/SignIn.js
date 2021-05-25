import React from "react";
import { Container, Button } from "react-bootstrap";
import { signInWithGoogle, signInAnon } from "../firebase";

const SignIn = () => {
	return (
		<Container className="sign-in-container">
			<Container className="form-sign-in-container">
				<Button variant="danger" onClick={signInAnon}>
					Guest Sign In
				</Button>
			</Container>
			<Container className="google-sign-in-container">
				<Button variant="success" onClick={signInWithGoogle}>
					Sign in with Google
				</Button>
			</Container>
		</Container>
	);
};

export default SignIn;
