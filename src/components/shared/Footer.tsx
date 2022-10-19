const Footer = () => (
	<>
		<div className="az-footer ht-40">
			<div className="container ht-100p pd-t-0-f">
				<div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
					<span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
						Copyright &copy;&nbsp;
						<a
							href="https://stockanalytica.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Stock Analytica {new Date().getFullYear()}
						</a>
					</span>
				</div>
			</div>
			{/* container */}
		</div>
		{/* az-footer */}
	</>
);
export default Footer;
