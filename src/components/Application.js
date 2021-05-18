import React from "react";

import SignIn from "./SignIn";
import Chatroom from "./Chatroom";

const Application = () => {
	const user = null;

	return user ? <Chatroom /> : <SignIn />;
};

export default Application;
