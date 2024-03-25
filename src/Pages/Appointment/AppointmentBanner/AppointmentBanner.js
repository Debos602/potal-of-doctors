import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import bgImage from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
	const bannerBg = {
		backgroundImage: `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<header className="py-16">
			<div className="hero" style={bannerBg}>
				<div className="hero-content p-0 justify-evenly flex-col gap-5 lg:flex-row-reverse">
					<img
						src={chair}
						className="rounded-lg max-w-lg shadow-2xl"
						alt="Img"
					/>
					<div className="mr-20">
						<DayPicker
							mode="single"
							selected={selectedDate}
							onSelect={setSelectedDate}
						/>

						<p>You have selected date: {format(selectedDate, "PP")}</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default AppointmentBanner;
