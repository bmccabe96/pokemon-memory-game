import React from "react";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../../utils";

export const Card = (props) => {
  const name = props.name;
  const image = props.image;
  // const name = capitalizeFirstLetter('bulbasaur');
  // const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

  return (
    <StyledContainer className="card">
      <Title>{name}</Title>
      <ImageContainer>
        <img src={image} alt={name + "image"} style={myImgStyle}></img>
      </ImageContainer>
    </StyledContainer>
  )
}

const myImgStyle = {
  width: '100%',
  height: 'auto'
}

const Title = styled.h2`
  color: rgb(83, 6, 6);
  font-weight: 450;
  margin: 0;
  padding: 0;
`

const ImageContainer = styled.div`
  width: 125px;
  height: 125px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  border-radius: 10px;
  padding: 25px;
  border: 2px solid rgb(255,0,0,.3);
  background-image: radial-gradient(circle, rgb(0,255,0,0.2), rgb(255,0,0,0.2), rgb(0,0,255,0.2));
`