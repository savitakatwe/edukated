"use client";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Typography from "@/components/Typography/Typography";
import { PropsWithChildren } from "react";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  width: 50%;
  height: 20px;
`;

const Header = (props: PropsWithChildren) => {
  return (
    <>
      <StyledDiv>
        <Typography variant={"title2"} color={"black"}>
          {props.children}
        </Typography>
        <FontAwesomeIcon icon={faEllipsis} color={"lightgray"} />
      </StyledDiv>
    </>
  );
};
export default Header;
