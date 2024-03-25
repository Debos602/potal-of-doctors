import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
	const { name, time_slots } = treatment;
	const date = format(selectedDate, "PP");

	const handleBooking = (event) => {
		event.preventDefault();
		const form = event.target;
		const slot = form.slot.value;
		const name = form.name.value;
		const email = form.email.value;
		const phone = form.phone.value;

		const booking = {
			appointmentDate: date,
			treatment: name,
			patient: name,
			slot,
			phone,
			email,
		};

		console.log(booking);
	};

	return (
		<>
			<dialog id="bookingModal" className="modal">
				<div className="modal-box">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
					</form>
					<h3 className="font-bold text-lg">{name}</h3>
					<form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
						<input
							type="text"
							disabled
							value={date}
							placeholder="Type here"
							className="input input-bordered w-full"
						/>
						<select name="slot" className="select select-bordered w-full">
							{time_slots?.map((slot, index) => (
								<option key={index} value={slot}>
									{slot}
								</option>
							))}
						</select>
						<input
							name="name"
							type="text"
							placeholder="Your  Name"
							className="input input-bordered w-full"
						/>
						<input
							name="email"
							type="text"
							placeholder="Email  Address"
							className="input input-bordered w-full"
						/>
						<input
							name="phone"
							type="text"
							placeholder="Phone Number"
							className="input input-bordered w-full"
						/>
						<input
							className="w-full bg-accent font-bold uppercase text-white input input-bordered"
							type="submit"
							value="Submit"
						/>
					</form>
				</div>
			</dialog>
		</>
	);
};

export default BookingModal;
