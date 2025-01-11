import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "flowbite-react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-red-500">Vite + React</h1>
            <Button>Number</Button>
        </>
    );
}

export default App;
