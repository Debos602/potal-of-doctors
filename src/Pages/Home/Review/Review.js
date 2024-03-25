import React from "react";

const Review = ({ review }) => {
	const { name, picture, location, description } = review;
	return (
		<div className="card bg-base-100 shadow-xl">
			<div className="card-body">
				<p className="font-normal text-xl">{description}</p>
				<div className="flex items-center">
					<figure>
						<img src={picture} alt="" />
					</figure>
					<div className="ps-5">
						<h2 className="card-title font-semibold text-xl">{name}</h2>
						<span className="text-base font-normal">{location}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
