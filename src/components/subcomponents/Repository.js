import React from "react";
import "../repopage.css";
import PropTypes from "prop-types";
import { MdCardMembership } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { GiBookmark } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import Poper from "./Poper";

const Repository = ({
	name,
	date,
	description,
	url,
	stargazers,
	watchers,
	forks,
}) => {
	let desc = description ? description : `No description`;
	let formatedDate = date.substring(0, 10);
	if (desc.length > 125) {
		desc = desc.substring(0, 125) + "..";
	}

	return (
		// Card/// position relative
		<div className="repo-card">
			{/* Apsolute sectio positioned top right */}
			<section className="date-row">
				<article className="aligner">
					<MdDateRange style={{ marginBottom: "2px" }} />
					{formatedDate}
				</article>
			</section>

			{/* Title flex-start */}
			<section className="top-row">
				<article className="aligner">
					<GiBookmark style={{ marginBottom: "2px" }} />
					<h3>{name}</h3>
				</article>
			</section>

			{/* Description row */}
			<section className="middle-row">{desc}</section>

			{/* Info section and button to repository */}
			<section className="bottom-row">
				<div className="statistics">
					<article className="aligner" style={{ alignItems: "center" }}>
						<AiOutlineStar />
						<Poper value={stargazers} name="stargazer" />
					</article>
					<article className="aligner" style={{ alignItems: "center" }}>
						<MdCardMembership />
						<Poper value={watchers} name="watchers" />
					</article>
					<article className="aligner" style={{ alignItems: "center" }}>
						<BiGitRepoForked />
						<Poper value={forks} name="forks" />
					</article>
				</div>
				<button
					className="more-details-btn"
					onClick={() => window.open(`${url}`, "_blank")}>
					More details
				</button>
			</section>
		</div>
	);
};

Repository.propTypes = {
	name: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	description: PropTypes.string,
	url: PropTypes.string.isRequired,
	stargazers: PropTypes.number.isRequired,
	watchers: PropTypes.number.isRequired,
	forks: PropTypes.number.isRequired,
};

export default Repository;
