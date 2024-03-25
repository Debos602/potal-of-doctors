import React from "react";
import bgImage from "../../../../assets/images/appointment.png";
import sideImage from "../../../../assets/images/doctor.png";


const MakeAppointment = () => {
	

	const sectionImage = {
		backgroundImage: `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center left",
	};
	return (
		<div style={sectionImage}>
			<div className="grid grid-cols-2 max-lg:grid-cols-1 ">
				<figure className="-mt-36">
					<img src={sideImage} alt="" />
				</figure>
				<div className="flex flex-col justify-center md:item-center">
					<div className="text-white px-16 lg:ps-0">
						<h2 className="font-bold text-xl text-primary my-2">Appointment</h2>
						<h3 className="font-semibold text-3xl my-5">
							Make an appointment Today
						</h3>
						<p className="font-normal text-xl mb-10">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsumis that it has a more-or-less normal
							distribution of letters,as opposed to using 'Content here, content
							here', making it look like readable English. Many desktop
							publishing packages and web page
						</p>
						<button className="btn btn-primary text-white uppercase bg-gradient-to-l  from-primary to-secondary font-bold">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MakeAppointment;
