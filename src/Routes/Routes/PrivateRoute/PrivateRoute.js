import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		return (
			<div className="flex justify-center items-centers">
				<Oval
					visible={true}
					height="80"
					width="80"
					color="#4fa94d"
					ariaLabel="oval-loading"
					wrapperStyle={{}}
					wrapperClass=""
				/>
			</div>
		);
	}
	if (user) {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
