import React, { useEffect, useRef } from "react";

import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";

import { Container } from "react-bootstrap";
import Message from "./Message";
import NewMessage from "./NewMessage";

const Chatroom = () => {
	const ref = useRef();

	const [value, loading, error] = useCollection(
		firebase
			.firestore()
			.collection("chatrooms")
			.doc("roomA")
			.collection("messages")
			.orderBy("timestamp", "asc")
			.limitToLast(15),
		{ snapshotListenOptions: { includeMetadataChanges: true } }
	);

	useEffect(() => {
		ref.current && ref.current.scrollIntoView({ behavior: "smooth" });
	}, [value]);

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
								<Message key={message.id} text={message.data().text} />
							))}
							<span ref={ref}></span>
						</>
					)}
				</Container>
				<NewMessage />
			</Container>
		</Container>
	);
};

export default Chatroom;
