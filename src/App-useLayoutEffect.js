import { useRef, useLayoutEffect, useEffect } from "react";

const App = () => {
    const inputRef = useRef(null);
    useEffect(() => { // value No run last
        inputRef.current.value = "NO";
    }, []);

    useLayoutEffect(() => { // value OK run first
        inputRef.current.value = "OK";
    }, []);

    return (
        // value Yes run secound
        <div className="App">
            <input type="text" value="Yes" ref={inputRef} />
        </div>
    );
}

export default App;