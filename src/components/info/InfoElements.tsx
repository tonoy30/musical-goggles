import styled from "styled-components";

export const InfoContainer = styled.div<{ lightBg: boolean }>`
	color: #fff;
	background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const InfoWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 860px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const InfoRow = styled.div<{ imgStart: boolean }>`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2 col1'` : `'col1 col2'`};
	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
	}
`;

export const InfoColumn = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;

export const InfoColumn2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
`;

export const TopLine = styled.p`
	color: #01bf71;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

export const Heading = styled.h1<{ lightText: boolean }>`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? "#f9f9f9" : "#010606")};

	@media screen and (max-width: 768px) {
		font-size: 32px;
	}
`;

export const SubTitle = styled.p<{ darkText: boolean }>`
	font-size: 18px;
	line-height: 24px;
	max-width: 440px;
	margin-bottom: 35px;
	color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const ImageWrapper = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const Image = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;
