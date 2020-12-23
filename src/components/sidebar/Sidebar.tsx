import React from "react";
import {
	CloseIcon,
	Icon,
	SidebarButton,
	SidebarContainer,
	SidebarLink,
	SidebarMenu,
	SidebarRoute,
	SidebarWrapper,
} from "./SidebarElements";

interface IProps {
	isOpen: boolean;
	toggle: () => void;
}

const Sidebar = ({ isOpen, toggle }: IProps) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="discover" onClick={toggle}>
						Discover
					</SidebarLink>
					<SidebarLink to="services" onClick={toggle}>
						Services
					</SidebarLink>
					<SidebarLink to="signup" onClick={toggle}>
						Sign Up
					</SidebarLink>
				</SidebarMenu>
				<SidebarButton>
					<SidebarRoute to="/signin">Sign In</SidebarRoute>
				</SidebarButton>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
