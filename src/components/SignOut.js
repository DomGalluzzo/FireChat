import React from "react";
import { Button } from "react-bootstrap";
import { auth } from "../firebase";

const SignOut = () => {
	return (
		auth.currentUser && <Button onClick={() => auth.signOut()}>Sign Out</Button>
	);
};

export default SignOut;
