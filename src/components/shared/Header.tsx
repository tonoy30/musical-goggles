import { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import IMAGES from "../../assets/images/img1.jpg";
import { LOGOUT } from "../../constants/actions.type";

const mapStateToProps = (state: any) => ({
	...state.common,
});

const mapDispatchToProps = (dispatch: any) => ({
	onClickLogout: () => dispatch({ type: LOGOUT }),
});

export class Header extends Component<any, any> {
	closeMenu(e: any) {
		e.target.closest(".dropdown").classList.remove("show");
		e.target.closest(".dropdown .dropdown-menu").classList.remove("show");
	}

	toggleHeaderMenu(e: any) {
		e.preventDefault();
		document.querySelector("body")!.classList.toggle("az-header-menu-show");
	}

	componentDidUpdate(prevProps: any) {
		if (this.props.location !== prevProps.location) {
			document
				.querySelector("body")!
				.classList.remove("az-header-menu-show");
		}
	}

	render() {
		const img1 = require("../../assets/images/img2.jpg").default;
		return (
			<div>
				<div className="az-header">
					<div className="container">
						<div className="az-header-left">
							<a href="/home" className="az-logo">
								<span></span> stock analytica
							</a>
							<a
								id="azMenuShow"
								onClick={(event) =>
									this.toggleHeaderMenu(event)
								}
								className="az-header-menu-icon d-lg-none"
								href="#/"
							>
								<span></span>
							</a>
						</div>
						<div className="az-header-menu">
							<div className="az-header-menu-header">
								<Link to="/home" className="az-logo">
									<span></span> SA
								</Link>
								<a
									href="#/"
									onClick={(event) =>
										this.toggleHeaderMenu(event)
									}
									className="close"
								>
									&times;
								</a>
							</div>
							<ul className="nav">
								<li
									className={
										this.isPathActive("/dashboard")
											? "nav-item active"
											: "nav-item"
									}
								>
									<Link to="/dashboard" className="nav-link">
										<i className="typcn typcn-chart-area-outline"></i>
										Dashboard
									</Link>
								</li>
							</ul>
						</div>
						<div className="az-header-right">
							<a href="#/" className="az-header-search-link">
								<i className="fas fa-search"></i>
							</a>
							<div className="az-header-message">
								<Link to="#/">
									<i className="typcn typcn-messages"></i>
								</Link>
							</div>
							<Dropdown className="az-header-notification">
								<Dropdown.Toggle as={"a"} className="new">
									<i className="typcn typcn-bell"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<div className="az-dropdown-header mg-b-20 d-sm-none">
										<a
											href="#/"
											onClick={(event) =>
												this.closeMenu(event)
											}
											className="az-header-arrow"
										>
											<i className="icon ion-md-arrow-back"></i>
										</a>
									</div>
									<h6 className="az-notification-title">
										Notifications
									</h6>
									<p className="az-notification-text">
										You have 2 unread notification
									</p>
									<div className="az-notification-list">
										<div className="media new">
											<div className="az-img-user">
												<img src={IMAGES} alt="" />
											</div>
											<div className="media-body">
												<p>
													Congratulate{" "}
													<strong>
														Socrates Itumay
													</strong>{" "}
													for work anniversaries
												</p>
												<span>Mar 15 12:32pm</span>
											</div>
										</div>
										<div className="media new">
											<div className="az-img-user online">
												<img
													src="../../assets/images/img3.jpg"
													alt=""
												/>
											</div>
											<div className="media-body">
												<p>
													<strong>Joyce Chua</strong>{" "}
													just created a new blog post
												</p>
												<span>Mar 13 04:16am</span>
											</div>
										</div>
										<div className="media">
											<div className="az-img-user">
												<img src={img1} alt="" />
											</div>
											<div className="media-body">
												<p>
													<strong>
														Althea Cabardo
													</strong>{" "}
													just created a new blog post
												</p>
												<span>Mar 13 02:56am</span>
											</div>
										</div>
										<div className="media">
											<div className="az-img-user">
												<img
													src={require("../../assets/images/img5.jpg")}
													alt=""
												></img>
											</div>
											<div className="media-body">
												<p>
													<strong>
														Adrian Monino
													</strong>{" "}
													added new comment on your
													photo
												</p>
												<span>Mar 12 10:40pm</span>
											</div>
										</div>
									</div>
									<div className="dropdown-footer">
										<a href="#/">View All Notifications</a>
									</div>
								</Dropdown.Menu>
							</Dropdown>
							<Dropdown className="az-profile-menu">
								<Dropdown.Toggle
									as={"a"}
									className="az-img-user"
								>
									<img src={img1} alt="" />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<div className="az-dropdown-header d-sm-none">
										<a
											href="#/"
											onClick={(event) =>
												this.closeMenu(event)
											}
											className="az-header-arrow"
										>
											<i className="icon ion-md-arrow-back"></i>
										</a>
									</div>
									<div className="az-header-profile">
										<div className="az-img-user">
											<img src={img1} alt="" />
										</div>
										<h6>Aziana Pechon</h6>
										<span>Premium Member</span>
									</div>

									<a href="#/" className="dropdown-item">
										<i className="typcn typcn-user-outline"></i>{" "}
										My Profile
									</a>
									<a href="#/" className="dropdown-item">
										<i className="typcn typcn-edit"></i>{" "}
										Edit Profile
									</a>
									<a href="#/" className="dropdown-item">
										<i className="typcn typcn-time"></i>{" "}
										Activity Logs
									</a>
									<a href="#/" className="dropdown-item">
										<i className="typcn typcn-cog-outline"></i>{" "}
										Account Settings
									</a>
									<a
										href="#/"
										className="dropdown-item"
										onClick={this.props.onClickLogout}
									>
										<i className="typcn typcn-power-outline"></i>{" "}
										Sign Out
									</a>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
		);
	}

	isPathActive(path: any) {
		return window.location.pathname.startsWith(path);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
