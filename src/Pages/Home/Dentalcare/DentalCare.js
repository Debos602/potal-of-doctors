import React from "react";
import image from "../../../assets/images/treatment.png";

const DentalCare = () => {
	return (
		<div className="hero mb-32">
			<div className="hero-content  gap-5 ">
				<img src={image} className="rounded-lg  max-w-[492px] shadow-2xl" alt="Img" />
				<div className="ps-20">
					<h1 className="text-5xl font-bold ">
						Exceptional Dental Care, on Your Terms
					</h1>
					<p className="py-6">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsumis that it has a more-or-less normal
						distribution of letters,as opposed to using 'Content here, content
						here', making it look like readable English. Many desktop publishing
						packages and web page
					</p>
					<button className="btn btn-primary text-white uppercase bg-gradient-to-l  from-primary to-secondary font-bold">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default DentalCare;
