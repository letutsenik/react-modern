import React from "react";
import Mouse from "./Mouse";
import Cat from "../components/Cat";
import { withMouse } from "./Mouse";

const CatWithMouse = withMouse(Cat);
class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                {/*<Mouse render={mouse => (*/}
                {/*    <Cat mouse={mouse} />*/}
                {/*)}/>*/}
                <CatWithMouse />
            </div>
        );
    }
}

export default MouseTracker;
