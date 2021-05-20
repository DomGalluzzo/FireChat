import React from "react";
import { auth } from "../firebase";

const Message = ({ text, uid }) => {
	const messageClass = uid === auth.currentUser.uid ? "received" : "sent";

	return (
		<div className={`message ${messageClass}`}>
			<p>{text}</p>
		</div>
	);
};

export default Message;
