import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    // Check if treatment is null or undefined, then provide a default value for name
    const { name: treatmentName, time_slots } = treatment || {};
    const { user } = useContext(AuthContext);
    const date = format(selectedDate, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            phone,
            email,
        };
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                } else {
                    toast.error(data.message);
                }
            });
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
                    <h3 className="font-bold text-lg">{treatmentName}</h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3"
                    >
                        <input
                            type="text"
                            disabled
                            value={date}
                            placeholder="Type here"
                            className="input input-bordered w-full"
                        />
                        <select
                            name="slot"
                            className="select select-bordered w-full"
                        >
                            {time_slots?.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            name="name"
                            type="text"
                            defaultValue={user.displayName}
                            disabled
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            name="email"
                            defaultValue={user?.email}
                            type="text"
                            disabled
                            placeholder="Email Address"
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
