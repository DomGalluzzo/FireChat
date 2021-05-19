import React from "react";
import { auth } from "../firebase";

const Message = ({ content, uid }) => {
	const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

	return (
		<div className={`Message ${messageClass}`}>
			<p>{content}</p>
		</div>
	);
};

export default Message;
