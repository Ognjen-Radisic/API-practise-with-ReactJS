import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../homepage.css";

const User = ({ photo, name, description, login }) => {
	let desc = description ? description : name ? name : `No description`;

	if (desc.length > 30) {
		desc = desc.substring(0, 29) + "..";
	}

	const openRep = () => {
		console.log("Im clicked");
	};

	return (
		<div className="card">
			<img src={photo} alt="avatar" />
			<h3>{login}</h3>
			<h4>{desc}</h4>

			{login ? (
				<Link to={`/users/${login}`} className="btn" onClick={openRep}>
					Repositories
				</Link>
			) : (
				<button className="disabled-btn" disabled={true}>
					Repositories
				</button>
			)}
		</div>
	);
};

User.propTypes = {
	photo: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	name: PropTypes.string,
	description: PropTypes.string,
};

export default User;
