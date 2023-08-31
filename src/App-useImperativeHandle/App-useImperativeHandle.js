import { useRef} from "react";
import Button from './Button';

const App = () => {
    const buttonRef = useRef(null);
    return (
        <div>
            <button onClick={() => buttonRef.current.alterToggle()}>button from perent</button>
            <Button ref={buttonRef}/>
        </div>
    );
}

export default App;