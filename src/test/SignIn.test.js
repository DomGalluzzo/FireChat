import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import SignIn from "../components/SignIn";

// let container = null;
// beforeEach(() => {
// 	// setup a DOM element as a render target
// 	container = document.createElement("div");
// 	document.body.appendChild(container);
// });

// afterEach(() => {
// 	// cleanup on exiting
// 	unmountComponentAtNode(container);
// 	container.remove();
// 	container = null;
// });

// it("renders when user is not logged in", () => {
// 	act(() => {
// 		render(<SignIn />, container);
// 	});
// 	expect(container.textContent).toBe("Sign in with Google");
// });

// afterEach(cleanup);

// it("SignIn renders when user is not logged in", () => {
// 	const {queryByLabelText, getByLabelText} = render(
// 		<SignIn
// 	)
// })
