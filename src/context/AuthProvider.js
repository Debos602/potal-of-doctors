import React, { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { paste } from "@testing-library/user-event/dist/paste";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleLogin = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const updateUser = (profile) => {
		return updateProfile(auth.currentUser, profile);
	};
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser);
			setUser(currentUser);
			setLoading(false);
		});
		return () => unSubscribe();
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		signIn,
		googleLogin,
		updateUser,
		logOut,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
