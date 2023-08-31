import {useState, createContext} from "react";
import Login from "./Login";
import User from "./User";

export const UserContext = createContext();
const App = () => {
    const [username, setUsername] = useState('');
    return (
        <UserContext.Provider value={{username, setUsername}}>
            <Login/> <User/>
        </UserContext.Provider>
    );
}

export default App;