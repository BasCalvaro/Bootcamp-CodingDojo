import React from "react";

const ToDoItem = ({
	item,
	index,
	isChecked,
	handleCheckboxChange,
	handleOnDelete,
}) => {
	return (
		<li className="row my-2 align-items-center">
			<div className="col">
				<span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
					{item.text}
				</span>
			</div>
			<div className="col d-flex justify-content-end align-items-center">
				<div>
					<input
						type="checkbox"
						className="mx-3"
						checked={isChecked}
						onChange={() => handleCheckboxChange(index)}
					/>
				</div>
				<button
					type="button"
					className="btn btn-primary btn-lg btn-block"
					onClick={() => handleOnDelete(index)}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default ToDoItem;
