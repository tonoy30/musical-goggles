import React from "react";
import { FaBars } from "react-icons/fa";
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
	return (
		<Nav>
			<NavContainer>
				<NavLogo to="/">Dollar</NavLogo>
				<MobileLogo onClick={toggle}>
					<FaBars />
				</MobileLogo>
				<NavMenu>
					<NavItem>
						<NavScrollLink to="about">About</NavScrollLink>
					</NavItem>
					<NavItem>
						<NavScrollLink to="discover">Discover</NavScrollLink>
					</NavItem>
					<NavItem>
						<NavScrollLink to="about">Services</NavScrollLink>
					</NavItem>
					<NavItem>
						<NavScrollLink to="signup">Sign Up</NavScrollLink>
					</NavItem>
				</NavMenu>
				<NavButton>
					<NavLink to="/signin">Sign In</NavLink>
				</NavButton>
			</NavContainer>
		</Nav>
	);
};

export default Header;
