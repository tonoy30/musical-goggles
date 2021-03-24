import _superagent from "superagent";
// @ts-ignore
import superAgentPromise from "superagent-promise";

const agent = superAgentPromise(_superagent, global.Promise);
export const API_ROOT =
	"https://stockanalytica.centralindia.cloudapp.azure.com";

//const encode = encodeURIComponent;
const responseBody = (res: any) => res.body;

let token: any = null;
const tokenPlugin = (req: any) => {
	if (token) {
		req.set("authorization", `Token ${token}`);
	}
};

const allowOrigin = (req: any) => {
	req.set("Access-Control-Allow-Origin", "*");
};

const requests = {
	del: (url: string) =>
		agent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
	get: (url: string) =>
		agent
			.get(`${API_ROOT}${url}`)
			.use(tokenPlugin, allowOrigin)
			.then(responseBody),
	put: (url: string, body: any) =>
		agent
			.put(`${API_ROOT}${url}`, body)
			.use(tokenPlugin)
			.then(responseBody),
	post: (url: string, body: any) =>
		agent
			.post(`${API_ROOT}${url}`, body)
			.use(tokenPlugin, allowOrigin)
			.then(responseBody),
};

const Auth = {
	current: () => requests.get("/user"),
	login: (email: string, password: string) =>
		requests.post("/auth/api/v1/login", {
			email: email,
			password: password,
		}),
	register: (email: string, password: string) =>
		requests.post("/auth/api/v1/register", {
			email: email,
			password: password,
		}),
	save: (user: any) => requests.put("/user", { user }),
};

const History = {
	upDown: () => requests.get("/history/api/v1/updown"),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Auth,
	History,
	setToken: (_token: string) => {
		token = _token;
	},
};
