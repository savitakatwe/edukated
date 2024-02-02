"use client";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const StyledDiv = styled(Image)<{ width: string; height: string }>`
  border: 1px solid #f4c7b8;
  height: 40px;
  width: 40px;
  border-radius: 15px;
  margin: 10px;
`;

interface IAvatarProps {
  imgSrc: StaticImageData;
}
const Avatar = (props: PropsWithChildren<IAvatarProps>) => {
  return (
    <>
      <StyledDiv
        src={props.imgSrc}
        alt={""}
        height={"50"}
        width={"50"}
      ></StyledDiv>
    </>
  );
};
export default Avatar;
