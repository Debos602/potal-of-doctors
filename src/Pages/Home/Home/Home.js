import React from "react";
import Banner from "../Banner/Banner";
import TagCards from "../TagCards/TagCards";
import Services from "../Services/Services";
import DentalCare from "../Dentalcare/DentalCare";
import MakeAppointment from "./MakeAppoinment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";

const Home = () => {
	return (
		<div>
			<div>
				<Banner></Banner>
				<TagCards></TagCards>
				<Services></Services>
				<DentalCare></DentalCare>
				<MakeAppointment></MakeAppointment>
				<Testimonial></Testimonial>
				<Contact></Contact>
			</div>
		</div>
	);
};

export default Home;
