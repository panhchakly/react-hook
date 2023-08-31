import React, {useContext} from "react";
import { UserContext } from "./App";

const Login = () => {
    const { setUsername } = useContext(UserContext);
    return (
        <div>
            <input type="text" onChange={(event) =>
            setUsername(event.target.value)} />
        </div>
    );
}

export default Login;