import { memo } from "react";
import React from "react";

function Timer({ onIncreaseClick }) {
    console.log("re-render");
    return (
        <React.Fragment>
            <button onClick={onIncreaseClick}>Increament</button>
        </React.Fragment>
    );
}

export default memo(Timer);
