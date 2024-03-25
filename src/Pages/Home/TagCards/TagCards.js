import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import TagCard from "./TagCard";

const TagCards = () => {
	const cardData = [
		{
			id: 1,
			name: "Opening Hours",
			description: "Open 9.00 am to 5.00 pm every day",
			icon: clock,
			bgClass: "bg-primary bg-gradient-to-l from-primary to-secondary",
		},
		{
			id: 2,
			name: "Our Locations",
			description: "Open 9.00 am to 5.00 pm every day",
			icon: marker,
			bgClass: "bg-accent",
		},
		{
			id: 3,
			name: "Contact Us",
			description: "Open 9.00 am to 5.00 pm every day",
			icon: phone,
			bgClass: "bg-primary bg-gradient-to-r from-primary to-secondary",
		},
	];

	return (
		<div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{cardData.map((card) => (
				<TagCard key={card.id} card={card}></TagCard>
			))}
		</div>
	);
};

export default TagCards;
