import React from "react";

const newtab = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const { tabs, setTabs } = props;

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const addTab = () => {
		const newTab = {
			label: `Tab ${tabs.length + 1}`,
			content: `Tab ${tabs.length + 1} content is showing here`,
		};
		setTabs([...tabs, newTab]);
	};

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------
	return (
		<div class="btn-group btn-group-toggle" data-toggle="buttons">
			<button
				type="button"
				class="btn btn-primary btn-lg btn-block"
				onClick={addTab}
			>
				+
			</button>
		</div>
	);
};

export default newtab;
