import React from "react";
import { useGlobalContext } from "../AppContext";
import User from "./subcomponents/User";
import "./homepage.css";

const HomeUsers = () => {
	const { users, searchField } = useGlobalContext();

	return (
		<div className="grid-container">
			{users
				.filter((user) => {
					if (searchField === "") return user;
					else if (
						user.login.toLowerCase().includes(searchField.toLowerCase())
					) {
						return user;
					}
				})
				.map((u) => {
					return (
						<User
							key={u.id}
							photo={u.photo}
							name={u.name}
							description={u.description}
							login={u.login}
						/>
					);
				})}
		</div>
	);
};

export default HomeUsers;
