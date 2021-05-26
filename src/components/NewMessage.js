import React, { useState } from "react";
import { auth } from "../firebase";

import firebase from "firebase/app";

const NewMessage = () => {
	const [message, setMessage] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();

		const db = firebase.firestore();

		db.collection("chatrooms")
			.doc("roomA")
			.collection("messages")
			.add({
				name: auth.currentUser.displayName,
				text: message,
				profilePicUrl: auth.currentUser.photoURL,
				uid: auth.currentUser.uid,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.catch((error) => {
				console.error("Error writing new message to database", error);
			});

		setMessage("");
	};

	return (
		<form className="new-message-form" onSubmit={sendMessage}>
			<input
				className="new-message-input"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Send message"
			/>
			<button className="new-message-button" type="submit" disabled={!message}>
				💬
			</button>
		</form>
	);
};

export default NewMessage;
