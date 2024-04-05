import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddDoctor = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: specialities, isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch(
                'http://localhost:5000/appointmentSpeciality'
            );
            const data = await res.json();
            return data;
        },
    });

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const doctor = {
                        name: data.displayName,
                        email: data.email,
                        speciality: data.speciality,
                        image: imgData.data.url,
                    };

                    // save doctor information to the database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearder ${localStorage.getItem(
                                'accessToken'
                            )}`,
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            console.log(result);
                            toast.success(
                                `${data.displayName} is added successfully`
                            );
                            navigate('/dashboard/managedoctors');
                        });
                }
            });
    };

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="w-96 p-7">
            <h2 className="text-4xl">Add a doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="label">
                    <span className="label-text">Name</span>
                </div>
                <input
                    className="w-full border-2 rounded-lg p-2"
                    type="text"
                    {...register('displayName', {
                        required: 'Name is required',
                    })}
                    placeholder="name"
                />
                {errors.displayName && (
                    <p className="text-red-500" role="alert">
                        {errors.displayName?.message}
                    </p>
                )}
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input
                    className="w-full border-2 rounded-lg p-2"
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                    })}
                    placeholder="email"
                />
                {errors.email && (
                    <p className="text-red-500" role="alert">
                        {errors.email?.message}
                    </p>
                )}
                <div className="label">
                    <span className="label-text">Speciality</span>
                </div>
                <select
                    {...register('speciality')}
                    className="select input-bordered w-full max-w-xs"
                    value="Pick a speciality"
                >
                    {specialities.map((speciality) => (
                        <option key={speciality._id} value={speciality.name}>
                            {speciality.name}
                        </option>
                    ))}
                </select>
                <div className="label">
                    <span className="label-text">Photo</span>
                </div>
                <input
                    className="w-full border-2 rounded-lg p-2"
                    type="file"
                    {...register('image', {
                        required: 'Photo is required',
                    })}
                    placeholder=""
                />
                {errors.img && (
                    <p className="text-red-500" role="alert">
                        {errors.displayName?.message}
                    </p>
                )}

                <input
                    className="w-full border-2 bg-accent text-white mt-5 p-2 rounded-lg"
                    type="submit"
                    value="Add Doctor"
                />
            </form>
        </div>
    );
};

export default AddDoctor;
