import React, { useState } from "react";


//create your first component
const ChoosePlayer = (props) => {
    const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");

	return (
		<div className="text-center">
            <div
				// style={{ display: props.hide ? "block" : "none" }}
				id="modal-container">
				<div className="choose-modal">
					<h3>Choose Your Weapon</h3>
					<div>
						<input
							type="text"
							placeholder="Player 1 username"
							onChange={evt => setInput1(evt.target.value)}
						/>
						<input
							type="text"
							placeholder="Player 2 username"
							onChange={evt => setInput2(evt.target.value)}
						/>
					</div>
					<div className="button-area">
						<span
							onClick={() => {
								props.setMark("x");
								props.setPlayer1(input1);
								props.setPlayer2(input2);
							}
							}
							className="x-marker">
							X
						</span>
						<span
							onClick={() =>
								{
									props.setMark("o");
									props.setPlayer1(input1);
									props.setPlayer2(input2);
								}
							}
							className="o-marker">
							O
						</span>
					</div>
				</div>
				<div className="end-game-modal">
					<h3 />
					<p>Try harder next time!</p>
					<div className="button-area">
						<span>Play Again</span>
					</div>
				</div>
			</div>
        </div>
	);
};

export default ChoosePlayer;
