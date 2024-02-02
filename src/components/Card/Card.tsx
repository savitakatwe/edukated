"use client";
import { PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";
import Avatar from "@/components/Avatar/Avatar";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const StyledImageContainer = styled.div<{ width: string; height: string }>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: 15px;
  overflow: hidden;
  flex-grow: 1;
`;

const ButtonOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -150%);
  cursor: pointer;
`;
const StyledTitle1 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -280%);
  cursor: pointer;
`;
const StyledTitle2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -260%);
  cursor: pointer;
`;
const StyledAvatar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-160%, -187%);
  cursor: pointer;
`;

interface ICardProps {
  cardImage: StaticImageData;
  avatarImage: StaticImageData;
  cardTitle1?: string;
  cardTitle2?: string;
  buttonText?: string;
  cardDescription?: string;
  cardHeight: string;
  cardWidth: string;
}

const Card = (props: PropsWithChildren<ICardProps>) => {
  return (
    <StyledContainer>
      <StyledImageContainer width={props.cardWidth} height={props.cardHeight}>
        <Image
          src={props.cardImage}
          alt=""
          width={parseInt(props.cardWidth)}
          height={parseInt(props.cardHeight)}
          placeholder="empty"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E`}
        />
        <StyledAvatar>
          <Avatar imgSrc={props.avatarImage} />
        </StyledAvatar>
        <StyledTitle1>
          <Typography variant={"body"} color={"white"}>
            {props.cardTitle1}
          </Typography>
        </StyledTitle1>
        <StyledTitle2>
          <Typography variant={"small"} color={"white"}>
            {props.cardTitle2}
          </Typography>
        </StyledTitle2>

        <ButtonOverlay>
          <Button>{props.buttonText || "Click"}</Button>
        </ButtonOverlay>
      </StyledImageContainer>

      {/* Add another card here with different image and text */}
    </StyledContainer>
  );
};

export default Card;
