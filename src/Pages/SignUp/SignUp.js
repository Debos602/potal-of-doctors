import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
	const { createUser } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleSignUp = (data) => {
		const { email, password } = data;

		createUser(email, password)
			.then((result) => {
				const user = result.user;
			})
			.catch((error) => console.log(error));
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
							{...register("displayName", { required: "Name is required" })}
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
							{...register("email", { required: "Email is required" })}
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
							{...register("password", {
								required: "Password is required",
								pattern: {
									value: /^(?=.*[A-Z])(?=.*[!@#$&*]).*$/,
									message: "Password must be strong",
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
					</form>
					<p>
						Already Register?{" "}
						<Link to="/login" className="text-secondary">
							Please Login
						</Link>
					</p>
					<div className="divider">OR</div>
					<button className="btn btn-outline w-full hover:bg-accent">
						CONTINUE WITH GOOGLE
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
