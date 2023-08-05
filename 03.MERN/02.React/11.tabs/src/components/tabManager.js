import React, { useState } from "react";
import NewTab from "./newTab";

const TabManager = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const [tabs, setTabs] = useState([
		{
			label: "Tab 1",
			content: "Tab 1 content is showing here",
		},
		{
			label: "Tab 2",
			content: "Tab 2 content is showing here",
		},
		{
			label: "Tab 3",
			content: "Tab 3 content is showing here",
		},
	]);

	const [index, setIndex] = useState(0);

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const tabSelected = (i) => {
		setIndex(i);
	};

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------
	return (
		<div>
			<div style={{ overflowX: "auto" }}>
				<div className="btn-group btn-group-toggle" data-toggle="buttons">
					{tabs.map((item, i) => (
						<button
							key={i}
							setIndex={setIndex}
							type="button"
							className={`btn btn-primary btn-lg btn-block ${
								i === index ? "active" : ""
							}`}
							onClick={() => tabSelected(i)}
						>
							{item.label}
						</button>
					))}
					<NewTab tabs={tabs} setTabs={setTabs}></NewTab>
				</div>
			</div>
			<div className="border border-dark my-4 mx-2">
				<p className="text-left px-2 py-1"> {tabs[index].content}</p>
			</div>
		</div>
	);
};

export default TabManager;
