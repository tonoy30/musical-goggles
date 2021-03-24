import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
	FooterContainer,
	FooterLink,
	FooterLinkItems,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkTitle,
	FooterWrapper,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMediaContainer,
	SocialMediaWrapper,
	WebsiteRights,
} from "./FooterElements";

const Footer = () => {
	const scrollToHome = () => {
		scroll.scrollToTop();
	};
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="about">About</FooterLink>
							<FooterLink to="about">About</FooterLink>
							<FooterLink to="about">About</FooterLink>
							<FooterLink to="about">About</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Services</FooterLinkTitle>
							<FooterLink to="about">About</FooterLink>
							<FooterLink to="about">About</FooterLink>
							<FooterLink to="about">About</FooterLink>
							<FooterLink to="about">About</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Discover</FooterLinkTitle>
							<FooterLink to="about">About</FooterLink>
							<FooterLink to="about">About</FooterLink>
							<FooterLink to="about">About</FooterLink>
							<FooterLink to="about">About</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
							<FooterLink to="about">Facebook</FooterLink>
							<FooterLink to="about">Youtube</FooterLink>
							<FooterLink to="about">Twitter</FooterLink>
							<FooterLink to="about">Instagram</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMediaContainer>
					<SocialMediaWrapper>
						<SocialLogo to="/" onClick={scrollToHome}>
							Stock Analytica
						</SocialLogo>
						<WebsiteRights>
							All rights reserved by Stock Analytica &copy;{" "}
							{new Date().getFullYear()}
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Facebook"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Instagram"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Youtube"
							>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Twitter"
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Linkedin"
							>
								<FaLinkedinIn />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrapper>
				</SocialMediaContainer>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
