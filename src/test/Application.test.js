import React from "react";
import "./setupTests";
import { shallow } from "enzyme";

import Application from "../components/Application";
import SignIn from "../components/SignIn";

// ! Example
// describe("Counter Testing", () => {
// 	let wrapper;
// 	beforeEach(() => {
// 		wrapper = shallow(<Application />);
// 	});

// 	it("renders the title of counter", () => {
// 		expect(wrapper.find("h1").text()).toContain("This is counter app");
// 	});

// 	it("renders a button with text of 'increment'", () => {
// 		expect(wrapper.find("#increment-btn").text()).toBe("Increment");
// 	});

// 	it("render the initial value of state in a div", () => {
// 		expect(wrapper.find("#counter-value").text()).toBe("0");
// 	});

// 	it("renders the click event of increment button and increment counter value", () => {
// 		wrapper.find("#increment-btn").simulate("click");
// 		expect(wrapper.find("#counter-value").text()).toBe("1");
// 	});

// 	it("renders the click event of decrement button and decrement counter value", () => {
// 		wrapper.find("#increment-btn").simulate("click");
// 		expect(wrapper.find("#counter-value").text()).toBe("1");
// 		wrapper.find("#decrement-btn").simulate("click");
// 		expect(wrapper.find("#counter-value").text()).toBe("0");
// 	});
// });

describe("Application", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Application />);
	});

	it("Should render SignIn Component", () => {
		expect(wrapper.containsMatchingElement(<SignIn />)).toEqual(true);
	});
});
