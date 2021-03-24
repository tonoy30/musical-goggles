import React from "react";
import { Button } from "../common/Button";
import { PageModel } from "../common/models/PageModel";
import {
	ButtonWrapper,
	Heading,
	Image,
	ImageWrapper,
	InfoColumn,
	InfoColumn2,
	InfoContainer,
	InfoRow,
	InfoWrapper,
	SubTitle,
	TextWrapper,
	TopLine,
} from "./InfoElements";

const Info = ({
	id,
	dark,
	primary,
	lightBg,
	lightText,
	darkText,
	topLine,
	headLine,
	description,
	buttonLabel,
	imgStart,
	img,
	alt,
}: PageModel) => {
	return (
		<InfoContainer lightBg={lightBg} id={id}>
			<InfoWrapper>
				<InfoRow imgStart={imgStart}>
					<InfoColumn>
						<TextWrapper>
							<TopLine>{topLine}</TopLine>
							<Heading lightText={lightText}>{headLine}</Heading>
							<SubTitle darkText={darkText}>
								{description}
							</SubTitle>
							<ButtonWrapper>
								<Button
									to="home"
									primary={primary ? "true" : "false"}
									dark={dark ? "true" : "false"}
									smooth={true}
									duration={700}
									spy={true}
									offset={-80}
								>
									{buttonLabel}
								</Button>
							</ButtonWrapper>
						</TextWrapper>
					</InfoColumn>
					<InfoColumn2>
						<ImageWrapper>
							<Image src={img} alt={alt} />
						</ImageWrapper>
					</InfoColumn2>
				</InfoRow>
			</InfoWrapper>
		</InfoContainer>
	);
};

export default Info;
