import React, { useState } from "react";



//create your first component
const Board = (props) => {
    var winningCombinations = [
        //horizontal straight lines
        [1, 1, 1, 0, 0, 0, 0, 0, 0],

        [0, 0, 0, 1, 1, 1, 0, 0, 0],

        [0, 0, 0, 0, 0, 0, 1, 1, 1],

        //vertical straight lines
        [1, 0, 0, 1, 0, 0, 1, 0, 0],

        [0, 1, 0, 0, 1, 0, 0, 1, 0],

        [0, 0, 1, 0, 0, 1, 0, 0, 1],

        //diagonal straight lines
        [1, 0, 0, 0, 1, 0, 0, 0, 1],

        [0, 0, 1, 0, 1, 0, 1, 0, 0]
    ];

    const checkForWinner = (lastValues) => {
        let winner = null;
        winningCombinations.forEach(
            (winningArray, index) => {
                let successfulMatches = 0; 
                for(let [ind, elm] of winningArray.entries()){
                    if(elm == 1){
                        if(lastValues[ind] == props.mark){
                            successfulMatches++;
                            if(successfulMatches > 2) {
                                winner = props.mark
                            }
                        }
                    }
                }
            }
        )
        if(winner != null) {
            props.handleWinner(props.mark);
        }
    }

    const updateNextMove = (position) => {
      let newValues = props.squareValues.map((value, ind) => ind == position ? props.mark : value);      
      props.setSquareValues(newValues);
      props.nextMove();
      checkForWinner(newValues);  
      if(!newValues.includes("")){
		console.log("Board is full")
      }
    }


	return (
		<div className="text-center">
            <div className="board clearfix">
					<div className="row">
						<div
							className="square"
							onClick={() => updateNextMove(0)}>
							{props.squareValues[0]}
						</div>
						<div
							className="square"
							onClick={() => updateNextMove(1)}>
							{props.squareValues[1]}
						</div>
						<div
							className="square"
							onClick={() => updateNextMove(2)}>
							{props.squareValues[2]}
						</div>
					</div>
					<div className="row">
						<div
							className="square"
							onClick={() => updateNextMove(3)}>
							{props.squareValues[3]}
						</div>
						<div
							className="square"
							onClick={() => updateNextMove(4)}>
							{props.squareValues[4]}
						</div>
						<div
							className="square"
							onClick={() => updateNextMove(5)}>
							{props.squareValues[5]}
						</div>
					</div>
					<div className="row">
						<div
							className="square"
							onClick={() => updateNextMove(6)}>
							{props.squareValues[6]}
						</div>
						<div
							className="square"
							onClick={() => updateNextMove(7)}>
							{props.squareValues[7]}
						</div>
						<div
							className="square"
							onClick={() => updateNextMove(8)}>
							{props.squareValues[8]}
						</div>
					</div>
				</div>
			
        </div>
	);
};

export default Board;
