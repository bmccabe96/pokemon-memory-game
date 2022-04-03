import React from "react";
import styled from 'styled-components';

const Header = () => {
  return (
    <div className="header-container">
      <HorizontalLine color="red" height="50px" />
      <div className="header-middle">
        <HorizontalLine color="black" height="15px">
          <Circle size="50px" border="6px">
            <Circle size="30px" border="2px"></Circle>
          </Circle>
        </HorizontalLine>
      </div>

    </div>
  )
}

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border: ${(props) => props.border} solid black;
  border-radius: 50%;
  background-color: white;
`

const HorizontalLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
`



export default Header;