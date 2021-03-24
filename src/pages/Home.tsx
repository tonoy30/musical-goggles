import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Info from "../components/info/Info";
import Services from "../components/services/Services";
import Sidebar from "../components/sidebar/Sidebar";
import { Discover, InfoData, SignUp } from "./data";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Header toggle={toggle} />
			<Hero />
			<Info {...InfoData} />
			<Info {...Discover} />
			<Services />
			<Info {...SignUp} />
			<Footer />
		</>
	);
};

export default Home;
