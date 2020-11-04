import React from "react";

const UIScreen = ({ onPlayRequest, onSettingsRequest, onQuitRequest }) => {
	return (
		<div className="container">
			<div className="center-block">
				<div className="text-center logo-title  mt-5">
					<div className="logo"></div>
					<h2>Chess</h2>
				</div>
				<div className="column text-center mt-5">
					<div>
						<button className="btn px-5 mb-2 btn-success" onClick={onPlayRequest}>Play</button>
					</div>
					<div>
						<button className="btn px-5 mb-2 btn-primary" onClick={onSettingsRequest}>Settings</button>
					</div>
					<div>
						<button className="btn px-5 mb-2 btn-danger" onClick={onQuitRequest}>Quit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UIScreen;
