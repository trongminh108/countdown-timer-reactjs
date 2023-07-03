import { useState, React } from "react";
import "./App.css";
import Content from "./Content.js";

function App() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content />}
        </div>
    );
}

export default App;
