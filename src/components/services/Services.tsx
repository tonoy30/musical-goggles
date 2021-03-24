import React from "react";
import Icon1 from "../../images/off_road.svg";
import {
	ServicesCard,
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	ServicesIcon,
	ServicesP,
	ServicesWrapper,
} from "./ServicesElements";
const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Lorem, ipsum dolor.</ServicesH2>
					<ServicesP>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Accusantium voluptatum similique magni,
						exercitationem praesentium natus?
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Lorem, ipsum dolor.</ServicesH2>
					<ServicesP>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Accusantium voluptatum similique magni,
						exercitationem praesentium natus?
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Lorem, ipsum dolor.</ServicesH2>
					<ServicesP>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Accusantium voluptatum similique magni,
						exercitationem praesentium natus?
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
