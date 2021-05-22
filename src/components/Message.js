import React from "react";
import { auth } from "../firebase";

const Message = ({ text, uid, userAvatar }) => {
	const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

	return (
		<div className={`message ${messageClass}`}>
			<img
				className="message-user-avatar"
				src={userAvatar}
				alt="UserAvatar.jpg"
			/>
			<p>{text}</p>
		</div>
	);
};

export default Message;
