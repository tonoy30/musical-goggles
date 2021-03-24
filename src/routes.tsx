import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));

const SignIn = lazy(() => import("./components/signin/SignIn"));
const Signup = lazy(() => import("./components/signup/Signup"));

const AppRoutes = () => (
	<Suspense fallback="">
		<Switch>
			<Route exact path="/">
				<Redirect to="/home" />
			</Route>
			<Route exact path="/home" component={Home} />
			<Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/signin" component={SignIn} />
			<Route exact path="/signup" component={Signup} />
		</Switch>
	</Suspense>
);
export { AppRoutes };
