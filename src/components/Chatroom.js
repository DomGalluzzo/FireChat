import React from "react";
import {
	useFirestoreDocData,
	useFirestore,
	useFirestoreCollectionData,
} from "reactfire";

import { Button, Container, FormControl, InputGroup } from "react-bootstrap";

const Chatroom = () => {
	const chatroomRef = useFirestore()
		.collection("chatrooms")
		.doc("roomA")
		.collection("messages");

	const { status, data } = useFirestoreCollectionData(chatroomRef);

	if (status === "loading") {
		return <p>loading...</p>;
	}

	return (
		<Container className="chatroom-container">
			<Container className="chatroom-list-container">
				<li>room1</li>
				<li>room2</li>
				<li>room3</li>
			</Container>
			<Container className="messages-container">
				{data.map((message) => {
					return <h5>{message.content}</h5>;
				})}
				<InputGroup>
					<FormControl placeholder="Message..." aria-label="User's Message" />
					<InputGroup.Append>
						<Button variant="success">Send</Button>
					</InputGroup.Append>
				</InputGroup>
			</Container>
		</Container>
	);
};

export default Chatroom;
