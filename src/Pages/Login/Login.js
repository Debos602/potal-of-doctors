import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signIn, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {
        // console.log(data);
        const { email, password } = data;
        setLoginError('');
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                setLoginUserEmail(email);
            })
            .catch((error) => {
                console.log(error);
                setLoginError('Enter a valid password');
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                toast('Google login successfully');
                navigate(from, { replace: true });
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="h-[500px] flex justify-center items-center ">
            <div className="border-2 p-7 rounded-xl">
                <h2 className="text-xl text-center">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                            minLength: {
                                value: 6,
                                message:
                                    'Password must be 6 characters or longer',
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
                    <div>
                        {loginError && (
                            <p className="text-red-600">{loginError}</p>
                        )}
                    </div>
                </form>
                <Link className="text-center font-semibold" to="/">
                    Forget Password
                </Link>
                <p>
                    New to Doctors Portal?{' '}
                    <Link to="/signup" className="text-secondary">
                        Please Register First
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
    );
};

export default Login;
