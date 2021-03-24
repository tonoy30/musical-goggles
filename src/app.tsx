import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "react-router-redux";
import { APP_LOAD, REDIRECT } from "../src/constants/actions.type";
import agent from "./agent";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { AppRoutes } from "./routes";
import { store } from "./store";

const mapStateToProps = (state: any) => {
	return {
		appLoaded: state.common.appLoaded,
		appName: state.common.appName,
		currentUser: state.common.currentUser,
		redirectTo: state.common.redirectTo,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	onLoad: (payload: any, token: any) =>
		dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
	onRedirect: () => dispatch({ type: REDIRECT }),
});

class App extends React.Component<any, any> {
	state = {
		isFullPageLayout: false,
	};

	componentWillReceiveProps(nextProps: any) {
		if (nextProps.redirectTo) {
			// this.context.router.replace(nextProps.redirectTo);
			store.dispatch(push(nextProps.redirectTo));
			this.props.onRedirect();
		}
	}

	componentWillMount() {
		const token = window.localStorage.getItem("jwt");
		if (token) {
			agent.setToken(token);
		} else {
			store.dispatch(push("/signin"));
		}

		//this.props.onLoad(token ? agent.Auth.current() : null, token);
	}

	componentDidMount() {
		this.onRouteChanged();
	}

	componentDidUpdate(prevProps: any) {
		if (this.props.location !== prevProps.location) {
			this.onRouteChanged();
		}
	}
	onRouteChanged() {
		console.log("ROUTE CHANGED");
		window.scrollTo(0, 0);
		const fullPageLayoutRoutes = ["/signin", "/signup", "/home"];
		for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
			if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
				this.setState({
					isFullPageLayout: true,
				});
				document
					.querySelector(".az-content-wrapper")!
					.classList.add("p-0");
				break;
			} else {
				this.setState({
					isFullPageLayout: false,
				});
				document
					.querySelector(".az-content-wrapper")!
					.classList.remove("p-0");
			}
		}
	}

	render() {
		let headerComponent = !this.state.isFullPageLayout ? <Header /> : "";
		let footerComponent = !this.state.isFullPageLayout ? <Footer /> : "";
		// if (this.props.appLoaded) {
		return (
			<div>
				{headerComponent}
				<div className="az-content-wrapper">
					<AppRoutes />
				</div>
				{footerComponent}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
