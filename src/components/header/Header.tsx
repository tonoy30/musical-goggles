import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
	MobileLogo,
	Nav,
	NavButton,
	NavContainer,
	NavItem,
	NavLink,
	NavLogo,
	NavMenu,
	NavScrollLink,
} from "./HeaderElements";

interface IProps {
	toggle: () => void;
}

const Header = ({ toggle }: IProps) => {
	const [isScrolling, setIsScrolling] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setIsScrolling(true);
		} else {
			setIsScrolling(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", changeNav);

		return () => {
			window.removeEventListener("scroll", changeNav);
		};
	}, []);
	const scrollToHome = () => {
		scroll.scrollToTop();
	};
	return (
		<IconContext.Provider value={{ color: "#fff" }}>
			<Nav isScrolling={isScrolling}>
				<NavContainer>
					<NavLogo to="/" onClick={scrollToHome}>
						stock analytica
					</NavLogo>
					<MobileLogo onClick={toggle}>
						<FaBars />
					</MobileLogo>
					<NavMenu>
						<NavItem>
							<NavScrollLink
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
							>
								About
							</NavScrollLink>
						</NavItem>
						<NavItem>
							<NavScrollLink
								to="discover"
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
							>
								Discover
							</NavScrollLink>
						</NavItem>
						<NavItem>
							<NavScrollLink
								to="services"
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
							>
								Services
							</NavScrollLink>
						</NavItem>
						<NavItem>
							<NavScrollLink
								to="teams"
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
							>
								Teams
							</NavScrollLink>
						</NavItem>
					</NavMenu>
					<NavButton>
						<NavLink to="/signin">Sign In</NavLink>
					</NavButton>
				</NavContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Header;
