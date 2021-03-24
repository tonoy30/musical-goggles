import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import agent from "../../agent";
import {
	LOGIN,
	LOGIN_PAGE_UNLOADED,
	UPDATE_FIELD_AUTH,
} from "../../constants/actions.type";

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
	onChangeEmail: (value) =>
		dispatch({ type: UPDATE_FIELD_AUTH, key: "email", value }),
	onChangePassword: (value) =>
		dispatch({ type: UPDATE_FIELD_AUTH, key: "password", value }),
	onSubmit: (email, password) =>
		dispatch({
			type: LOGIN,
			payload: agent.Auth.register(email, password),
		}),
	onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
});

export class Signup extends Component<any, any> {
	changeEmail: (ev: any) => any;
	changePassword: (ev: any) => any;
	submitForm: (email: any, password: any) => (ev: any) => void;
	constructor(props) {
		super(props);
		this.changeEmail = (ev) => this.props.onChangeEmail(ev.target.value);
		this.changePassword = (ev) =>
			this.props.onChangePassword(ev.target.value);
		this.submitForm = (email, password) => (ev) => {
			console.log(email, password);
			ev.preventDefault();
			this.props.onSubmit(email, password);
		};
	}

	componentWillUnmount() {
		this.props.onUnload();
	}
	render() {
		const email = this.props.email;
		const password = this.props.password;
		return (
			<div>
				<div className="az-signup-wrapper">
					<div className="az-column-signup-left">
						<div>
							<i className="typcn typcn-chart-bar-outline"></i>
							<h1 className="az-logo">
								Stock Analytica<span>i</span>a
							</h1>
							<h5>
								Responsive Modern Dashboard &amp; Admin Template
							</h5>
							<p>
								We are excited to launch our new company and
								product Azia. After being featured in too many
								magazines to mention and having created an
								online stir, we know that BootstrapDash is going
								to be big. We also hope to win Startup Fictional
								Business of the Year this year.
							</p>
							<p>
								Browse our site and see for yourself why you
								need Azia.
							</p>
							<a href="#/" className="btn btn-outline-indigo">
								Learn More
							</a>
						</div>
					</div>
					{/* az-column-signup-left */}
					<div className="az-column-signup">
						<h1 className="az-logo">Stock Analytica</h1>
						<div className="az-signup-header">
							<h2>Get Started</h2>
							<h4>
								It's free to signup and only takes a minute.
							</h4>

							<form onSubmit={this.submitForm(email, password)}>
								<div className="form-group">
									<label>Firstname &amp; Lastname</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter your firstname and lastname"
									/>
								</div>
								{/* form-group */}
								<div className="form-group">
									<label>Email</label>
									<input
										type="email"
										className="form-control"
										placeholder="Enter your email"
										value={email}
										onChange={this.changeEmail}
									/>
								</div>
								{/* form-group */}
								<div className="form-group">
									<label>Password</label>
									<input
										type="password"
										className="form-control"
										placeholder="Enter your password"
										value={password}
										onChange={this.changePassword}
									/>
								</div>
								{/* form-group */}
								<Button
									className="btn btn-az-primary btn-block"
									type="submit"
									disabled={this.props.inProgress}
								>
									Create Account
								</Button>
								<div className="row row-xs">
									<div className="col-sm-6">
										<button className="btn btn-block">
											<i className="fab fa-facebook-f"></i>{" "}
											Signup with Facebook
										</button>
									</div>
									<div className="col-sm-6 mg-t-10 mg-sm-t-0">
										<button className="btn btn-primary btn-block">
											<i className="fab fa-twitter"></i>{" "}
											Signup with Twitter
										</button>
									</div>
								</div>
								{/* row */}
							</form>
						</div>
						{/* az-signup-header */}
						<div className="az-signup-footer">
							<p>
								Already have an account?{" "}
								<Link to="/signin">Sign In</Link>
							</p>
						</div>
						{/* az-signin-footer */}
					</div>
					{/* az-column-signup */}
				</div>
				{/* az-signup-wrapper */}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
