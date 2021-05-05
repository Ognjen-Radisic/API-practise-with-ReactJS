import { useHistory } from "react-router-dom";
import React from "react";
import "./repopage.css";

const UserReposHeader = () => {
	let history = useHistory();

	return (
		<div className="header-footer">
			<button onClick={history.goBack} className="header-footer-btn">
				back
			</button>
		</div>
	);
};

export default UserReposHeader;
