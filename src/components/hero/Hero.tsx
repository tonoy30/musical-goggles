import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../common/Button";
import {
	ArrowForward,
	ArrowRight,
	HeroBg,
	HeroButtonWrapper,
	HeroContainer,
	HeroContent,
	HeroH1,
	HeroP,
	VideoBg,
} from "./HeroElements";

const Hero = () => {
	const [hover, setHover] = useState(false);
	const history = useHistory();
	const onHover = () => {
		setHover(!hover);
	};
	return (
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg
					autoPlay
					loop
					muted
					src={
						"https://res.cloudinary.com/drgxgrvli/video/upload/v1666725338/video_sy9yey.mp4"
					}
				/>
			</HeroBg>
			<HeroContent>
				<HeroH1>Virtual Stock Market Made Easy</HeroH1>
				<HeroP>
					Sign up for a new account today and receive $250 in credit
					towards your next payment.
				</HeroP>
				<HeroButtonWrapper>
					<Button
						primary="true"
						dark="true"
						to=""
						onClick={() => history.push("/signup")}
						smooth={true}
						spy={true}
						offset={-80}
						onMouseEnter={onHover}
						onMouseLeave={onHover}
					>
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroButtonWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
