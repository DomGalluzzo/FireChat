import React from "react";
import { useFirestoreDocData, useFirestore } from "reactfire";

const Burrito = () => {
	const burritoRef = useFirestore().collection("tryreactfire").doc("burrito");

	const { status, data } = useFirestoreDocData(burritoRef);

	const handleYummyChange = () => {
		burritoRef.set({ yummy: !data.yummy });
	};

	if (status === "loading") {
		return <p>Fetching burrito flavor...</p>;
	}

	return (
		<>
			<button onClick={handleYummyChange}>Click</button>
			<p>The burrito is {data.yummy ? "good" : "bad"}!</p>
		</>
	);
};

export default Burrito;
