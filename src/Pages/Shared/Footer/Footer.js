import React from "react";
import { Link } from "react-router-dom";
import footerImage from "../../../assets/images/footer.png";

const Footer = () => {
	const footerBg = {
		backgroundImage: `url(${footerImage})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
	};

	return (
		<div className="" style={footerBg}>
			<footer className="footer p-10 flex justify-evenly">
				<nav className="font-normal text-base">
					<h6 className="footer-title">Services</h6>
					<Link to="" className="link link-hover">
						Emergency Checkup
					</Link>
					<Link to="" className="link link-hover">
						Monthly Checkup
					</Link>
					<Link to="" className="link link-hover">
						Weekly Checkup
					</Link>
					<Link to="" className="link link-hover">
						Deep Checkup
					</Link>
				</nav>
				<nav className="font-normal text-base">
					<h6 className="footer-title">ORAL HEALTH</h6>
					<Link to="" className="link link-hover">
						Fluoride Treatment
					</Link>
					<Link to="" className="link link-hover">
						Cavity Filling
					</Link>
					<Link to="" className="link link-hover">
						Teath Whitening
					</Link>
				</nav>
				<nav className="font-normal text-base">
					<h6 className="footer-title">OUR ADDRESS</h6>
					<Link to="" className="link link-hover">
						New York - 101010 Hudson
					</Link>
				</nav>
			</footer>
			<footer className="footer footer-center p-4 text-base-content pb-10">
				<aside className="font-normal text-base">
					<p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
				</aside>
			</footer>
		</div>
	);
};

export default Footer;
