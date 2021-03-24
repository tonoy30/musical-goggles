import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import agent from "../../agent";
import {
	LOGIN,
	LOGIN_PAGE_UNLOADED,
	UPDATE_FIELD_AUTH,
} from "../../constants/actions.type";

const mapStateToProps = (state: any) => ({ ...state.auth });

const mapDispatchToProps = (dispatch: any) => ({
	onChangeEmail: (value: any) =>
		dispatch({ type: UPDATE_FIELD_AUTH, key: "email", value }),
	onChangePassword: (value: any) =>
		dispatch({ type: UPDATE_FIELD_AUTH, key: "password", value }),
	onSubmit: (email: any, password: any) =>
		dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
	onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
});

export class SignIn extends Component<any, any> {
	changeEmail: (ev: any) => any;
	changePassword: (ev: any) => any;
	submitForm: (email: any, password: any) => (ev: any) => void;
	constructor(props: any) {
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
			<>
				<div className="az-signin-wrapper">
					<div className="az-card-signin">
						<h1 className="az-logo">
							Stock <span>Analytica</span>
						</h1>
						<div className="az-signin-header">
							<h2>Welcome back!</h2>
							<h4>Please sign in to continue</h4>

							<form onSubmit={this.submitForm(email, password)}>
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
								{/*<Link className="btn btn-az-primary btn-block" disabled={this.props.inProgress}>Sign In</Link>*/}
								<button
									className="btn btn-az-primary btn-block"
									type="submit"
									disabled={this.props.inProgress}
								>
									Sign in
								</button>
							</form>
						</div>
						{/* az-signin-header */}
						<div className="az-signin-footer">
							<p>
								<a href="#/">Forgot password?</a>
							</p>
							<p>
								Don't have an account?{" "}
								<Link to="/signup">Create an Account</Link>
							</p>
						</div>
						{/* az-signin-footer */}
					</div>
					{/* az-card-signin */}
				</div>
				{/* az-signin-wrapper */}
			</>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
