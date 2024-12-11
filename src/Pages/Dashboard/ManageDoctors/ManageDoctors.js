import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const {
        data: doctors,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                });

                const data = await res.json();
                return data;
            } catch (error) {
                console.error('Error fetching doctors:', error);
                return []; // Return an empty array in case of error
            }
        },
    });

    console.log(doctors);

    const handleDeleteDoctor = (doctor) => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(
                        `Doctor  ${doctor.name} deleted successfully`
                    );
                }
            });
    };

    const handleModalDoctor = (doctor) => {
        document.getElementById('manageModal').showModal();
        setDeletingDoctor(doctor);
    };
    const closeModal = () => {
        setDeletingDoctor(null);
    };

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2>This manage doctors: {doctors ? doctors.length : 0}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors?.map((doctor, i) => (
                            <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.speciality}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleModalDoctor(doctor)
                                        }
                                        className="btn btn-sm btn-error"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ConfirmationModal
                title={`Are sure your want to delete`}
                message={`If you delete ${deletingDoctor?.name}. It can not be undone`}
                successAction={handleDeleteDoctor}
                successButtonName="Delete"
                modalData={deletingDoctor}
                closeModal={closeModal}
            ></ConfirmationModal>
        </div>
    );
};

export default ManageDoctors;
