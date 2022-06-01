import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Header = (props) => {
    const history = useHistory();
    return (
        <HeaderContainer onClick = {() => history.push("/")}>
            <Title> My Dictionary </Title>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
      background-color: #cfffaf;
      border-bottom: 2px solid blueviolet;
`;

const Title = styled.h1`
    color: slateblue;
    text-align: center;
    font-size: 50px;
    font-weight: 600;
    text-decoration: none;
`;

export default Header;
