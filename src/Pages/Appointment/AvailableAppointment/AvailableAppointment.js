import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointment = ({ selectedDate }) => {
	const [treatment, setTreatment] = useState(null);

	const date = format(selectedDate, "PP");

	const {
		data: appointmentOptions = [],
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ["appointmentOptions", date],
		queryFn: async () => {
			const res = await fetch(
				`http://localhost:5000/appointmentOptions?date=${date}`
			);
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loading></Loading>;
	}

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
				refetch={refetch}
			></BookingModal>
		</div>
	);
};

export default AvailableAppointment;
