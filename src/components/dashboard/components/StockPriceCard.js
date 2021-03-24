import React, { Component } from "react";

export class StockPriceCard extends Component {
	render() {
		let changeIcon = "\u2193";
		let change = this.props.stock.change.toString();
		change = change.trimRight("%");
		let stockChangePercentColor = "red";
		if (parseFloat(change) > 0) {
			stockChangePercentColor = "green";
			changeIcon = "\u2191";
		} else if (parseFloat(change) === 0) {
			changeIcon = "\u2195";
			stockChangePercentColor = "grey";
		}
		return (
			<div className="az-list-item">
				<div>
					<h6>
						{this.props.stock.trading_code}{" "}
						<span style={{ color: stockChangePercentColor }}>
							{" "}
							{changeIcon} {this.props.stock.change}
						</span>
					</h6>
					<span>Low: {this.props.stock.low}</span>
					<br />
					<span>High: {this.props.stock.high}</span>
				</div>
				<div>
					<br />
					<span>YCP: {this.props.stock.ycp}</span>
					<br />
					<span>LTP: {this.props.stock.ltp} </span>
				</div>
			</div>
		);
	}
}
