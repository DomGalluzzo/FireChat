import React, { useState } from "react";

import {
	useCollection,
	useCollectionData,
} from "react-firebase-hooks/firestore";
import firebase from "firebase/app";

import { Button, Container, Form } from "react-bootstrap";
import Message from "./Message";
import NewMessage from "./NewMessage";

const Chatroom = () => {
	const [value, loading, error] = useCollection(
		firebase
			.firestore()
			.collection("chatrooms")
			.doc("roomA")
			.collection("messages")
			.orderBy("createdAt")
			.limitToLast(25),
		{ snapshotListenOptions: { includeMetadataChanges: true } }
	);

	return (
		<Container className="chatroom-container">
			<Container className="chatroom-list-container">
				<li>room1</li>
				<li>room2</li>
				<li>room3</li>
			</Container>
			<Container className="messages-box">
				<Container className="messages-container">
					{error && <strong>Error: {JSON.stringify(error)}</strong>}
					{loading && <span>Loading...</span>}
					{value && (
						<>
							{value.docs.map((message) => (
								<Message key={message.id} content={message.data().content} />
							))}
						</>
					)}
				</Container>
				<NewMessage />
			</Container>
		</Container>
	);
};

export default Chatroom;
