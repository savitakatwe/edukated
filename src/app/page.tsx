"use client";
import SideBox from "@/components/sideBox/SideBox";
import styled from "styled-components";
import Header from "@/components/header/Header";
import avatarPic from "../../public/avatar.jpg";
import blueHouse from "../../public/bluehouse.jpeg";
import { faGear, faMessage, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHouseLock } from "@fortawesome/free-solid-svg-icons/faHouseLock";
import Avatar from "@/components/Avatar/Avatar";
import TextBox from "@/components/TextBox/TextBox";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import { black } from "next/dist/lib/picocolors";
import Card from "@/components/Card/Card";

const StyledContainer = styled.div`
  display: flex;
  margin: 30px;
`;
const StyledDiv1 = styled.div`
  margin: 100px 10px 10px 10px;
`;
const StyledDiv2 = styled.div`
  width: 70%;
`;
const StyledDiv3 = styled.div`
  width: 30%;
`;
const StyledAvatar = styled.div`
  margin: -12px 10px;
`;
const StyledBox = styled.div`
  margin: 0px 20px;
  display: flex;
  justify-content: space-between;
`;
const StyledCard = styled.div`
  display: flex;
`;
const SideBoxData = [
  {
    icon: faHouseLock,
    title: "Home",
  },
  {
    icon: faSearch,
    title: "Discover",
  },
  {
    icon: faMessage,
    title: "Message",
  },
  {
    icon: faGear,
    title: "Settings",
  },
];
export default function Home() {
  return (
    <>
      <StyledContainer>
        <StyledDiv1>
          <SideBox data={SideBoxData} />
        </StyledDiv1>
        <StyledDiv2>
          <Header>Streaming Now</Header>
          <StyledAvatar>
            <Avatar imgSrc={avatarPic}></Avatar>
            <Avatar imgSrc={avatarPic}></Avatar>
            <Avatar imgSrc={avatarPic}></Avatar>
            <Avatar imgSrc={avatarPic}></Avatar>
            <Avatar imgSrc={avatarPic}></Avatar>
            <Avatar imgSrc={avatarPic}></Avatar>
          </StyledAvatar>
          <StyledBox>
            <Typography variant={"title2"} color={"black"}>
              Popular This Week
            </Typography>
          </StyledBox>
          <StyledCard>
            <Card
              cardImage={blueHouse}
              cardHeight={"250"}
              cardWidth={"180"}
              cardTitle1={"Lana Martina"}
              cardTitle2={"Subscribe"}
              avatarImage={avatarPic}
              cardDescription={
                "Learning how to create illustration in 60 seconds"
              }
            />
            <Card
              cardImage={blueHouse}
              cardHeight={"250"}
              cardWidth={"180"}
              cardTitle1={"Lana Martina"}
              cardTitle2={"Subscribe"}
              avatarImage={avatarPic}
              cardDescription={"Creating a beautiful illustration"}
            />
          </StyledCard>
        </StyledDiv2>
        <StyledDiv3>
          <Header>Advanced Search</Header>
          <StyledBox>
            <TextBox></TextBox>
            <Button>Find</Button>
          </StyledBox>
        </StyledDiv3>
      </StyledContainer>
    </>
  );
}
