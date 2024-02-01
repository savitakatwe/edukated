"use client";
import styled from "styled-components";
import { PropsWithChildren } from "react";

const StyledSideBox = styled.div`
  background: #f8f9f8;
  margin: 20px 10px;
  padding: 20px 30px;
  border-radius: 15px;
  border: 1px none grey;
`;
const GreyBox = (props: PropsWithChildren) => {
  return <StyledSideBox>{props.children}</StyledSideBox>;
};
export default GreyBox;
