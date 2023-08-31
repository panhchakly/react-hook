import { useRef, useState } from "react";

const App = () => {
    const inputRef = useRef(null);
    const onFocus = () => {
        inputRef.current.focus();
    }
    const onBlur = () => {
        inputRef.current.blur();
    }
    const onClear = () => {
        inputRef.current.value = '';
        setText('');
    }
    const [getText, setText] = useState('');
    return (
        <div className="App">
            <input type="text" ref={inputRef} />
            <button onClick={onFocus}>focus input</button>
            <button onClick={onBlur}>blur input</button>
            <button onClick={onClear}>clear input</button>
            <button onClick={() => setText(inputRef.current.value)}>setText</button>
            <h1>{getText}</h1>
        </div>
    );
}

export default App;