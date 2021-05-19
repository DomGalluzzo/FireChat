import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";

import UserProvider from "./providers/userProvider";
import Application from "./components/Application";

const App = () => {
	return (
		<UserProvider>
			<Application />
		</UserProvider>
	);
};

export default App;
