import styled from "styled-components";
import { PropsWithChildren } from "react";

const StyledButton = styled.button`
  background: #f65329;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
`;

const Button = (props: PropsWithChildren) => {
  return (
    <>
      <StyledButton>{props.children}</StyledButton>
    </>
  );
};
export default Button;
