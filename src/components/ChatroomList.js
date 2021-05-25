import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

const ChatroomList = () => {
	const [value, loading, error] = useCollection(
		firebase.firestore().collection("chatrooms"),
		{ snapshotListenOptions: { includeMetadataChanges: true } }
	);

	return (
		<Container className="chatroom-list-container">
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			{loading && <span>Loading...</span>}
			{value && (
				<>
					{value.docs.map((chatroom) => {
						return <h6>{chatroom.data().name}</h6>;
					})}
				</>
			)}
		</Container>
	);
};

export default ChatroomList;
