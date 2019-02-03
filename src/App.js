import React, { Component } from 'react';
import AppRouter from './AppRouter';
import styled from 'styled-components';


const StyledDiv = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <AppRouter/>
      </StyledDiv>
    );
  }
}

export default App;
