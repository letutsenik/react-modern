import React from "react";

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div
                style={{
                    height: '300px',
                    position: "relative",
                }}
                onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default Mouse;

export const withMouse1 = (Component) => {
    return class extends React.Component {
        render() {
            return (
                <Mouse render={mouse => (
                    <Component {...this.props} mouse={mouse} />
                )}/>
            );
        }
    }
};

export const withMouse = (Component) => (props) => (
    <Mouse render={mouse => (
        <Component {...props} mouse={mouse} />
        )}/>
    );

