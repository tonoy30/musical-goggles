import { useState } from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Sidebar from "../components/sidebar/Sidebar";

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
		</>
	);
};

export default Home;
