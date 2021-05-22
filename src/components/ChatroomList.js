import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";

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
						return <>{chatroom.data().name}</>;
					})}
				</>
			)}
		</Container>
	);
};

export default ChatroomList;
