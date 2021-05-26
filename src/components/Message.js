import React from "react";
import { auth } from "../firebase";
import { Image } from "react-bootstrap";

const Message = ({ text, uid, userAvatar }) => {
	const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

	const userAvatarCheck = (userAvatar) => {
		debugger;
		if (userAvatar === null) {
			return "./guestIcon.png";
		}
		return userAvatar;
	};

	return (
		<div className={`message ${messageClass}`}>
			<Image
				className="message-user-avatar"
				src={userAvatarCheck(userAvatar)}
			/>
			<p style={{ marginBottom: 0 }}>{text}</p>
		</div>
	);
};

export default Message;
