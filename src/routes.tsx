import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));

const SignIn = lazy(() => import("./components/signin/Signin"));
const Signup = lazy(() => import("./components/signup/Signup"));

const AppRoutes = () => (
	<Suspense fallback="">
		<Switch>
			<Route exact path="/">
				<Redirect to="/home" />
			</Route>
			<Route path="/home" component={Home} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/signin" component={SignIn} />
			<Route path="/signup" component={Signup} />
		</Switch>
	</Suspense>
);
export { AppRoutes };
