import React from "react";
import styled from "styled-components";

const Win = () => {

  return (
    <StyledContainer>
      <h3 style={{margin: "5px", padding: "5px"}}>You win!!!</h3>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 250px;
  height: 250px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  border-radius: 10px;
  padding: 25px;
  border: 2px solid rgb(255,0,0,.3);
  animation: blinker 1s linear infinite;
  color: black;
  background-color: white;
  font-weight: bold;
  font-size: 40px;
`

export default Win;