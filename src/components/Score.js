import React, { useState }from "react";
import styled from "styled-components";

export const Score = (props) => {
  //const label = props.type === 'current' ? 'Current score: ' : 'Best score: ';

  const tempLabel = "Current score: ";
  const tempScore = 3;
  const tempType = "best";

  if (tempType === 'current') {
    return (
      <CurrentScoreWrapper>
        <p>{tempLabel + tempScore}</p>
      </CurrentScoreWrapper>
    )
  }

  return (
    <BestScoreWrapper>
      <p>{tempLabel + tempScore}</p>
    </BestScoreWrapper>
  )
    
}

const CurrentScoreWrapper = styled.div`
  background-color: red;
  color: white;
  font-weight: bold;
  width: 200px;
  height: 30px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BestScoreWrapper = styled.div`
  background-color: green;
  color: white;
  font-weight: bold;
  width: 200px;
  height: 30px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

