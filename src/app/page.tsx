"use client";
import SideBox from "@/components/sideBox/SideBox";
import styled from "styled-components";
import Header from "@/components/header/Header";
import {
  faGear,
  faHouse,
  faMessage,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faHouseLock } from "@fortawesome/free-solid-svg-icons/faHouseLock";

const StyledContainer = styled.div`
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
        <SideBox data={SideBoxData} />
        <Header>Streaming Now</Header>
        <div></div>
      </StyledContainer>
    </>
  );
}
