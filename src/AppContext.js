import React, { useState, useContext, useEffect } from "react";

const url = "https://api.github.com/users";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [searchField, setSearchField] = useState("");

	const fetchUsers = async (given_url) => {
		try {
			const response = await fetch(given_url);
			const data = await response.json();
			if (data) {
				console.log(data);
				const userList = await Promise.all(
					data.map((item) => {
						return fetchSingleUser(item.url);
					})
				);

				console.log(userList);
				setUsers(userList);
			} else {
				setUsers([]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchSingleUser = async (given_url) => {
		const response = await fetch(given_url);
		const data = await response.json();
		if (data) {
			return {
				id: data.id,
				photo: data.avatar_url,
				name: data.name,
				description: data.bio,
				login: data.login,
				repos_url: data.repos_url,
			};
		}
	};

	useEffect(() => {
		fetchUsers(url);
	}, []);
	return (
		<AppContext.Provider value={{ users, searchField, setSearchField }}>
			{children}
		</AppContext.Provider>
	);
};

//create custom hook for simplicity reasons

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
