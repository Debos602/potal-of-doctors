import React from "react";
import qoute from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

import Review from "../Review/Review";

const Testimonial = () => {
	const reviews = [
		{
			_id: 1,
			name: "winson henry",
			description:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			location: "California",
			picture: people1,
		},
		{
			_id: 2,
			name: "winson henry",
			description:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			location: "California",
			picture: people2,
		},
		{
			_id: 3,
			name: "winson henry",
			description:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			location: "California",
			picture: people3,
		},
	];
	return (
		<section className="m-16">
			<div className="flex justify-between">
				<div>
					<h4 className="text-xl text-secondary font-bold">Testimonial</h4>
					<h2 className="text-4xl">Whats Our Patients Says </h2>
				</div>
				<figure>
					<img className="w-24 lg:w-48" src={qoute} alt="" />
				</figure>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3  gap-10">
				{reviews.map((review) => (
					<Review review={review} key={review._id}></Review>
				))}
			</div>
		</section>
	);
};

export default Testimonial;
