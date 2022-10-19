import _superagent from "superagent";
// @ts-ignore
import superAgentPromise from "superagent-promise";

const agent = superAgentPromise(_superagent, global.Promise);
export const API_ROOT = "http://localhost:4000";

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
		requests.post("/api/auth/login", {
			emailOrUsername: email,
			password: password,
		}),
	register: (email: string, password: string, username: string) =>
		requests.post("/api/auth/signup", {
			email: email,
			password: password,
			username: username,
		}),
	save: (user: any) => requests.put("/user", { user }),
};

const History = {
	upDown: () => requests.get("/updown"),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Auth,
	History,
	setToken: (_token: string) => {
		token = _token;
	},
};
