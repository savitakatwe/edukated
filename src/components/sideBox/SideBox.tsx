"use client";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GreyBox from "@/components/greyBox/GreyBox";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const Styledli = styled.li`
  list-style: none;
  padding: 10px;
`;
const Styleddiv = styled.div`
  display: flex;
  align-items: center;
`;
interface IBox {
  icon: IconDefinition;
  title: string;
}
interface ISideBoxProps {
  data: IBox[];
}
const SideBox = (props: ISideBoxProps) => {
  return (
    <>
      <GreyBox>
        {props.data.map((item) => {
          return (
            <>
              <Styleddiv>
                <FontAwesomeIcon icon={item.icon} />
                <Styledli key={item.title}>{item.title}</Styledli>
              </Styleddiv>
            </>
          );
        })}
      </GreyBox>
    </>
  );
};

export default SideBox;
