import React, { useState }from "react";
import styled from "styled-components";

export const Score = (props) => {
  const label = props.type === 'current' ? 'Current score: ' : 'Best score: ';
  const score = props.score;
  const type = props.type;

  if (type === 'current') {
    return (
      <CurrentScoreWrapper>
        <p>{label + score}</p>
      </CurrentScoreWrapper>
    )
  }

  return (
    <BestScoreWrapper>
      <p>{label + score}</p>
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

