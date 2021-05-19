import React from "react";
import { auth } from "../firebase";

const Message = ({ content, uid }) => {
	const messageClass = uid === auth.currentUser.uid ? "received" : "sent";

	return (
		<div className={`message ${messageClass}`}>
			<p>{content}</p>
		</div>
	);
};

export default Message;
