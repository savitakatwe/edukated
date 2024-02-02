"use client";
import SideBox from "@/components/sideBox/SideBox";
import styled from "styled-components";
import Header from "@/components/header/Header";
import avatarPic from "../../public/avatar.jpg";
import { faGear, faMessage, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHouseLock } from "@fortawesome/free-solid-svg-icons/faHouseLock";
import Avatar from "@/components/Avatar/Avatar";
import TextBox from "@/components/TextBox/TextBox";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import { black } from "next/dist/lib/picocolors";

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
const StyledTextBox = styled.div`
  margin: 0px 20px;
  display: flex;
  justify-content: space-between;
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
          <StyledTextBox>
            <Typography variant={"title2"} color={"black"}>
              Popular This Week
            </Typography>
          </StyledTextBox>
        </StyledDiv2>
        <StyledDiv3>
          <Header>Advanced Search</Header>
          <StyledTextBox>
            <TextBox></TextBox>
            <Button>Find</Button>
          </StyledTextBox>
        </StyledDiv3>
      </StyledContainer>
    </>
  );
}
