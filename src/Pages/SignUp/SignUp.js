import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        const { email, password, displayName } = data;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                toast('User created successfully');
                const profile = {
                    displayName: displayName,
                };
                updateUser(profile)
                    .then(() => {
                        saveUser(displayName, email);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => {
                console.log(error);
                setSignUpError(error.message);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                toast('Google login successfully');
            })
            .catch((error) => console.log(error));
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                setCreatedUserEmail(email);
            });
    };

    return (
        <div>
            <div className="h-[500px] flex justify-center items-center ">
                <div className="border-2 p-7 rounded-xl">
                    <h2 className="text-xl text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
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
                            <span className="label-text">Password</span>
                        </div>
                        <input
                            className="w-full border-2 rounded-lg p-2"
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[!@#$&*]).*$/,
                                    message: 'Password must be strong',
                                },
                            })}
                            placeholder="password"
                        />
                        {errors.password && (
                            <p className="text-red-500" role="alert">
                                {errors.password?.message}
                            </p>
                        )}
                        <input
                            className="w-full border-2 bg-accent text-white mt-5 p-2 rounded-lg"
                            type="submit"
                        />
                        {signUpError && (
                            <p className="text-red-600">{signUpError}</p>
                        )}
                    </form>
                    <p>
                        Already Register?{' '}
                        <Link to="/login" className="text-secondary">
                            Please Login
                        </Link>
                    </p>
                    <div className="divider">OR</div>
                    <button
                        onClick={handleGoogleLogin}
                        className="btn btn-outline w-full hover:bg-accent"
                    >
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
