import React from "react";
import styled from 'styled-components';

// Button Styling

const ButtonWrapper = styled.button`
  border: 0;
  background-color: #fff;
  color: #000;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0px 0px 8px 2px rgba(15, 15, 15, 0.2);
`;

export default function Button(props) {
  return <ButtonWrapper>{props.children}</ButtonWrapper>;
}
