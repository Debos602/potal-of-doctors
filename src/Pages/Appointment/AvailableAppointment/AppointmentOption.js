import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
	const { name, time_slots } = appointmentOption;

	const handleBooking = () => {
		document.getElementById("bookingModal").showModal();
		setTreatment(appointmentOption);
	};

	return (
		<div className="card shadow-xl">
			<div className="card-body my-10">
				<h2 className="text-2xl font-bold text-secondary text-center mt-10">
					{name}
				</h2>
				<p className="text-center">
					{time_slots.length > 0 ? time_slots[0] : "Try another day"}
				</p>
				<p className="text-center">
					{time_slots.length} {time_slots.length > 1 ? "spaces" : "space"}{" "}
					available
				</p>
				<div className="card-actions justify-center">
					<button
						disabled={time_slots.length === 0}
						className="btn btn-primary text-white"
						onClick={() => handleBooking()}
					>
						Book Appointment
					</button>
				</div>
			</div>
		</div>
	);
};

export default AppointmentOption;
