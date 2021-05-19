import React, { useState } from "react";
import { auth } from "../firebase";

import firebase from "firebase/app";

const NewMessage = () => {
	const [message, setMessage] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();

		const db = firebase.firestore();
		const { uid } = auth.currentUser;

		const messagesRef = db
			.collection("chatrooms")
			.doc("roomA")
			.collection("messages")
			.add({
				content: message,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
				uid,
				from: auth.currentUser.displayName,
			});
		setMessage("");
	};

	return (
		<form onSubmit={sendMessage}>
			<input
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Send message"
			/>
			<button type="submit" disabled={!message}>
				Send
			</button>
		</form>
	);
};

export default NewMessage;
