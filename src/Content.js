import { useState, useRef, useCallback } from "react";
import "./Content.css";
import "./Timer";
import { memo } from "react";
import Timer from "./Timer";

function Content() {
    let time = 100;
    const [counter, setCounter] = useState(time);

    let end = useRef(counter);
    let interval = useRef(0);
    const clock = useRef(null);

    const handleStartClick = () => {
        if (counter === 0) {
            end.current = time;
            clock.current.style.backgroundImage = `conic-gradient(aqua 360deg, white 0deg)`;
            setCounter(time);
        }
        interval.current = setInterval(() => {
            setCounter((prev) => prev - 1);
            end.current--;
            clock.current.style.backgroundImage = `conic-gradient(aqua ${
                (end.current * 360) / time
            }deg, white 0deg)`;
            if (end.current === 0) {
                clearInterval(interval.current);
            }
        }, 70);
    };

    const handleEndClick = () => {
        clearInterval(interval.current);
    };

    const handleIncreaseClick = useCallback(() => {
        setCounter((prev) => prev + 1);
        end.current++;
        clock.current.style.backgroundImage = `conic-gradient(aqua ${
            (end.current * 360) / time
        }deg, white 0deg)`;
    }, []);

    return (
        <div className="Content">
            <Timer onIncreaseClick={handleIncreaseClick} />
            <div className="clock" ref={clock}>
                <h1>{counter}</h1>
            </div>
            <button onClick={handleStartClick}>Start</button>
            <button onClick={handleEndClick}>End</button>
        </div>
    );
}

export default memo(Content);
