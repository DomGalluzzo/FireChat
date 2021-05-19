import React from "react";
import { Container } from "react-bootstrap";

import SignOut from "./SignOut";

const Navigation = ({ user }) => {
	return (
		<Container className="navigation-container py-2" fluid>
			{user ? (
				<>
					<h3>Hello, {user.displayName}</h3>
					<SignOut />
				</>
			) : (
				<h3 id="welcome-text">Welcome to 🔥FireChat🔥</h3>
			)}
		</Container>
	);
};

export default Navigation;
