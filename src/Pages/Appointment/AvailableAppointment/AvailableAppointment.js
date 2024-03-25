import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
	const [appointmentOptions, setAppointmentOptions] = useState([]);
	const [treatment, setTreatment] = useState("");

	useEffect(() => {
		fetch("Service.json")
			.then((res) => res.json())
			.then((data) => setAppointmentOptions(data));
	}, []);
	return (
		<div>
			<p className="text-center font-bold text-secondary">
				Available Services {format(selectedDate, "PP")}
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{appointmentOptions.map((option) => (
					<AppointmentOption
						key={option._id}
						appointmentOption={option}
						setTreatment={setTreatment}
					></AppointmentOption>
				))}
			</div>
			<BookingModal
				treatment={treatment}
				setTreatment={setTreatment}
				selectedDate={selectedDate}
			></BookingModal>
		</div>
	);
};

export default AvailableAppointment;
