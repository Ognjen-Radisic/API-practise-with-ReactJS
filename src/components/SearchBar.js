import { TextField } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../AppContext";

const SearchBar = () => {
	const { setSearchField } = useGlobalContext();

	return (
		<div
			style={{
				width: "1100px",
				margin: " 50px auto",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<TextField
				id="outlined-basic"
				label="Search"
				variant="outlined"
				onChange={(e) => setSearchField(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
