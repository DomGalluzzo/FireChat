import React, { useState } from "react";

import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";

import { Button, Container, Form } from "react-bootstrap";

const Chatroom = () => {
	const [text, setText] = useState("");
	const [message, setMessage] = useState("");

	const [value, loading, error] = useCollection(
		firebase
			.firestore()
			.collection("chatrooms")
			.doc("roomA")
			.collection("messages"),
		{ snapshotListenOptions: { includeMetadataChanges: true } }
	);

	// useEffect(() => {}, [message]);

	// const chatroomRef = useFirestore()
	// 	.collection("chatrooms")
	// 	.doc("roomA")
	// 	.collection("messages");

	// const { status, data } = useFirestoreCollectionData(chatroomRef);

	const getTextInput = (e) => {
		setText(e.target.value);
	};

	const handleSendMessage = (e) => {
		e.preventDefault();
		setMessage(text);
	};

	// if (status === "loading") {
	// 	return <p>loading...</p>;
	// }

	return (
		<Container className="chatroom-container">
			<Container className="chatroom-list-container">
				<li>room1</li>
				<li>room2</li>
				<li>room3</li>
			</Container>
			<Container className="messages-container">
				<p>
					{error && <strong>Error: {JSON.stringify(error)}</strong>}
					{loading && <span>Collection: Loading...</span>}
					{value && (
						<span>
							{value.docs.map((message) => (
								<>{message.data().content}</>
							))}
						</span>
					)}
				</p>
			</Container>
		</Container>
	);
};

export default Chatroom;

// {
// 	value.map((message) => {
// 		return <h5>{message.content}</h5>;
// 	});
// }
// <Form inline className="message-box-form">
// 	<Form.Group controlId="formMessage" className="message-box-text-area">
// 		<Form.Control
// 			placeholder="Message..."
// 			aria-label="User's Message"
// 			as="textarea"
// 			rows={1}
// 			value={text}
// 			onChange={getTextInput}
// 		/>
// 	</Form.Group>
// 	<Button variant="success" type="submit" onClick={handleSendMessage}>
// 		Send
// 	</Button>
// </Form>;
