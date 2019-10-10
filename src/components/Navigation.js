import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const StyledList = styled.nav`
  padding: 20px;
  list-style: none;
`;
const StyledListItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  
  &:last-child {
    margin-right: 0;
  }
`;
const StyledLink = styled(Link)`
  color: blue;
  font-weight: bold;
`;

const Navigation = () =>
        <nav>
            <StyledList>
                <StyledListItem>
                    <StyledLink to="/">Home</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/about">About</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/contacts">Contacts</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/football">Football</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/dogs">Dogs</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/foods">Foods</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/hooks">Hooks</StyledLink>
                </StyledListItem>
            </StyledList>
        </nav>;


export default Navigation;
