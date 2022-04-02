import React from "react";
import styled from 'styled-components';

const Footer = () => {
  return (
    <div className="footer-container">
      <HorizontalLine color="red" height="25px">Developed by Brian McCabe</HorizontalLine>
    </div>
  )
}


const HorizontalLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  text-align: center;
  color: white;
  font-weight: bold;
`



export default Footer;