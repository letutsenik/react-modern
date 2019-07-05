import React from "react";
import cat from "./cat.svg";

class Cat extends React.Component {
    render() {
        const { mouse } = this.props;
        return (
            <img width="100px" height="100px" src={cat} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="cat" />
        );
    }
}

export default Cat;
