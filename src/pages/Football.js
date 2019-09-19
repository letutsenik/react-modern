import React, { Component, PureComponent } from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import styled from 'styled-components';


const Score = styled.div`
  color: brown;
  font-weight: bold;
  font-size: 30px;
`;

// PureComponent example
class ScoreComponent extends Component {
    state = {};

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return {}
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate");
        return nextProps.score !== this.props.score;
    }

    render() {
        console.log("render Score");
        return (
            <Score>{this.props.score}</Score>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return prevProps.score;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
        console.log("previous score - ", snapshot);
    }
}

class Match extends Component {
    state = {
        firstTeam: 0,
        secondTeam: 0,
        score: "0:0"
    };

    interval = null;

    constructor(props) {
        console.log("constructor");
        super(props);
    }

    generateScore = () => {
        const arr = [0, 1];
        const firstTeamScore = this.state.firstTeam + arr[Math.random() > 0.1 ? 0 : 1];
        const secondTeamScore = this.state.secondTeam + arr[Math.random() > 0.1 ? 0 : 1];
        this.setState({firstTeam: firstTeamScore, secondTeam: secondTeamScore})
    };


    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.interval);
    }

    render() {
        console.log("render Match");
        return (
            <div>
                <ScoreComponent score={`${this.state.firstTeam}:${this.state.secondTeam}`}/>
            </div>
        );
    }
}


const Football = () =>
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Football Match</title>
        </Helmet>
        <h2>Football Match score in real time</h2>
        <Match/>
    </Layout>;

export default Football;
