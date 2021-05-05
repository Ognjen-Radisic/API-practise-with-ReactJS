import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Repository from "./subcomponents/Repository";
import "./repopage.css";
import UserReposHeader from "./UserReposHeader";

//example for fetching 'https://api.github.com/users/defunkt/repos'
const url = "https://api.github.com/users/";

const UserRepos = () => {
	const { login } = useParams();
	const [repoInfo, setRepoInfo] = useState([]);
	const [loadThisMuch, setLoadThisMuch] = useState(6);

	const fetchRepos = async () => {
		try {
			const response = await fetch(`${url}${login}/repos`);
			const data = await response.json();
			console.log("datorino", data);

			if (data) {
				console.log(data);
				const requiredData = data.map((item) => {
					return {
						id: item.id,
						name: item.name,
						date: item.created_at,
						description: item.description,
						url: item.html_url,
						stargazers: item.stargazers_count,
						watchers: item.watchers_count,
						forks: item.forks_count,
					};
				});

				console.log("this is required data", requiredData);
				setRepoInfo(requiredData);
			} else {
				console.log("helouuuuuuuuuuuu");
				setRepoInfo(["this repo is empty"]);
			}
		} catch (error) {
			console.log("whyyyy");
			console.log(error);
		}
	};
	useEffect(() => {
		fetchRepos();
	}, [login]);

	return (
		<>
			{/* Header to display back button */}
			<UserReposHeader />

			{/* Display repositories of a user that is clicked */}
			<div className="repo-grid-container">
				{repoInfo.length !== 0 ? (
					repoInfo.map((i, index) => {
						if (index < loadThisMuch) {
							return <Repository key={i.id} {...i} />;
						}
						return null;
					})
				) : (
					<div
						style={{
							width: "300px",
							height: "100px",
						}}>
						"No repos"
					</div>
				)}
			</div>

			{/* FOOTER to load 6 more repositories */}
			<div className="header-footer">
				<button
					onClick={() => setLoadThisMuch(loadThisMuch + 6)}
					className="header-footer-btn">
					Load More
				</button>
			</div>
		</>
	);
};

export default UserRepos;
