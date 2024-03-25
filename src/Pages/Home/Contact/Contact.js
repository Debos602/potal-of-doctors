import React from "react";
import contactBg from "../../../assets/images/appointment.png";
import { MdSubject } from "react-icons/md";

const Contact = () => {
	const sectionImage = {
		backgroundImage: `url(${contactBg})`,
		backgroundSize: "cover",
		backgroundPosition: "center left",
	};
	return (
		<div style={sectionImage} className="py-16">
			<div className="w-full  md:w-2/4 lg:w-2/5 mx-auto px-20 ">
				<div className="text-center font-[Open-Sans]">
					<h3 className="text-xl font-bold text-primary uppercase mb-3">
						Our Services
					</h3>
					<h2 className="text-3xl text-white mb-10">Services we provide</h2>
				</div>
				<form className="text-center">
					<label className="input  input-bordered flex items-center mb-5 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="w-4 h-4 opacity-70"
						>
							<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
							<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
						</svg>
						<input type="text" className="grow" placeholder="Email" />
					</label>
					<label className="input input-bordered flex items-center mb-5 ">
						<MdSubject />
						<input type="text" className="grow" placeholder="Subject" />
					</label>
					<textarea
						placeholder="Your Message"
						className="textarea textarea-bordered textarea-lg w-full"
					></textarea>
					<button className="btn mt-7 btn-primary text-white uppercase bg-gradient-to-l  from-primary to-secondary font-bold">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
