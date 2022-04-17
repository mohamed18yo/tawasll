import React from "react";
import styled from "styled-components";
import { WrapperMenu } from "./style";

const getLeft = ({ position }) => {
  if (position === "top-right") {
    return "100%";
  }
  return "50%";
};

const getBottom = ({ position }) => {
  if (position === "top" || position === "top-right") {
    return "100%";
  }
  return "auto";
};

const DropdownContent = styled.div`
  width: max-content;
  display: none;
  flex-direction: column;
  position: absolute;
  transform: translate(-50%, 0);
  left: ${getLeft};
  bottom: ${getBottom};
  padding: 16px;
  max-height: 400px;
  overflow-y: auto;
`;

const Container = styled.div`
  position: relative;
  &:hover ${DropdownContent}, &:focus-within ${DropdownContent} {
    display: flex;
  }
`;

export const Dropdown = ({ target, children }) => {
  return (
  <WrapperMenu>

<Container>
  <div className="half">
    <label for="profile2" className="profile-dropdown">
      <input type="checkbox" id="profile2"/>
      <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png"/>
      <span>John Doe</span>
      <label for="profile2">USER</label>
      <ul>
        <li><a href="#">Messages</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">Messages</a></li>
      </ul>
    </label>
  </div>
</Container>
  </WrapperMenu>
  );
};
Dropdown.defaultProps = {
  position: "bottom",
};

export default Dropdown;




