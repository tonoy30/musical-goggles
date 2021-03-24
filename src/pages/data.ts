import { PageModel } from "../components/common/models/PageModel";
import Article from "../images/articles.svg";
import OffRoad from "../images/off_road.svg";
import SecureData from "../images/secure_data.svg";

export const InfoData: PageModel = {
	id: "about",
	dark: true,
	primary: true,
	lightBg: false,
	lightText: true,
	darkText: false,
	topLine: "Top Line",
	headLine:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eveniet.",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis, assumenda atque esse temporibus dolor quisquam aperiam a placeat in enim architecto non quas ipsum repellat laudantium consequatur doloremque perspiciatis.",
	buttonLabel: "Get Started",
	imgStart: false,
	img: OffRoad,
	alt: "Car",
};

export const Discover: PageModel = {
	id: "discover",
	dark: true,
	primary: true,
	lightBg: true,
	lightText: false,
	darkText: true,
	topLine: "Discover",
	headLine:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eveniet.",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis, assumenda atque esse temporibus dolor quisquam aperiam a placeat in enim architecto non quas ipsum repellat laudantium consequatur doloremque perspiciatis.",
	buttonLabel: "Learn More",
	imgStart: true,
	img: Article,
	alt: "Car",
};

export const SignUp: PageModel = {
	id: "signup",
	dark: false,
	primary: true,
	lightBg: true,
	lightText: false,
	darkText: true,
	topLine: "Join Our Team",
	headLine:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eveniet.",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis, assumenda atque esse temporibus dolor quisquam aperiam a placeat in enim architecto non quas ipsum repellat laudantium consequatur doloremque perspiciatis.",
	buttonLabel: "Start Now",
	imgStart: false,
	img: SecureData,
	alt: "Car",
};
