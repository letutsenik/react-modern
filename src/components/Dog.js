import React, { Component } from "react";
import styled from 'styled-components';


const StyledDog = styled.div`
  margin: 0 auto;
  text-align: center;
  img {
    
  }
`;

class Dog extends Component {
    state = {
      dogImg: ""
    };
    componentDidMount() {
        console.log("componentDidMount");
        // let myHeaders = new Headers({
        //     'Access-Control-Allow-Origin':'*',
        //     'Content-Type': 'application/json'
        // });
        //
        // const myInit = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     mode: 'cors',
        //     cache: 'default' };

        // fetch('https://cat-fact.herokuapp.com/facts/')
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => this.setState({dogImg: data.message}));
    }

    render() {
        return (
          <StyledDog>
              <img src={this.state.dogImg} alt="dog" width="250px" />
          </StyledDog>
        );
    }
}

export default Dog;
