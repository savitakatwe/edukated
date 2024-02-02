"use client";

import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  background: #f8f9f8;
  font-size: 14px;
  border-radius: 10px;
  padding: 10px;
  width: 180px;
`;

const TextBox = () => {
  return (
    <>
      <StyledInput placeholder={"Start writing something"}></StyledInput>
    </>
  );
};
export default TextBox;
