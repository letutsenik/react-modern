import React from "react";
import '../App.css';
import styled from 'styled-components';
import { Navigation } from "./Navigation/Navigation";

const StyledHeader = styled.header`
  background-color: lightgray;
`;

const Header = () =>
    <StyledHeader>
        <Navigation/>
    </StyledHeader>;


export default Header;
