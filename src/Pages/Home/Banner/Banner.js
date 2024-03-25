import React from "react";
import bgImage from "../../../assets/images/bg.png";
import chairImage from "../../../assets/images/chair.png";

const Banner = () => {
	const bannerBg = {
		backgroundImage: `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "100%",
		height: "100vh",
	};

	return (
		<div className="hero" style={bannerBg}>
			<div className="hero-content flex-col gap-5 lg:flex-row-reverse">
				<img
					src={chairImage}
					className="rounded-lg lg:w-1/2 shadow-2xl"
					alt="Img"
				/>
				<div className="pe-10">
					<h1 className="text-5xl font-bold font-['Open_Sans']">
						Your New Smile Starts Here
					</h1>
					<p className="py-6 font-['Open_Sans']">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the
					</p>
					<button className="btn btn-primary text-white uppercase bg-gradient-to-l  from-primary to-secondary font-bold font-['Open_Sans']">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
