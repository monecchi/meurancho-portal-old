import React, { Component } from "react";
import styled, { keyframes } from 'styled-components';


const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Dot = styled.div`
  background-color:  ${(props: {color: string }) => props.color};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props: {delay: string }) => props.delay};
`;


class DotsLoading extends Component {
  render() {
    return (
      <DotWrapper>
        <Dot color={this.props.color || "#FC0E36"} delay="0s" />
        <Dot color={this.props.color || "#FC0E36"} delay=".1s" />
        <Dot color={this.props.color || "#FC0E36"} delay=".2s" />
      </DotWrapper>
    )
  }
}
export default DotsLoading;
