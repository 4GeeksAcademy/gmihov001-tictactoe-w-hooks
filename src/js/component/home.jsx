import React, { useState } from "react";
import Board from "./board";
import ChoosePlayer from "./chooseplayer";

//create your first component
const Home = () => {
	const [mark, setMark] = useState("");
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [winner, setWinner] = useState("");
	const [squareValues, setSquareValues] = useState(["", "", "", "", "", "", "", "", ""]);

	const resetGame = () => {
		setSquareValues(["", "", "", "", "", "", "", "", ""]);
		setMark("");
		setPlayer1("");
		setPlayer2("");
		setWinner("");
	}

	const handleWinner = (winner) => {
		setWinner(winner);
	}

	const nextMove = () => {
		setMark(mark == 'x' ? 'o' : 'x')
	}

	return (
		<div className="container-fluid">
			<div id="msg">
				<div className="anouncement">
					{
						winner ? <h1>Game over! The Winner is: {winner == "x" ? player1 : player2}</h1> : null
					}

				</div>
				<h1>
					Tic Tac Toe <small>in React.js</small>
				</h1>
				{/* {this.renderMessage()} */}
				<div>
					<button
						onClick={() => resetGame()}
						className="btn btn-outline-warning mb-5">Reset</button></div>

				<Board
					mark={mark}
					nextMove={nextMove}
					handleWinner={handleWinner}
					squareValues={squareValues}
					setSquareValues={setSquareValues}
				/>
				<ChoosePlayer
					setMark={setMark}
					setPlayer1={setPlayer1}
					setPlayer2={setPlayer2}
				/>
			</div>
		</div>
	);
};

export default Home;
