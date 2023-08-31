import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "LIKE":
            return { ...state, likes: state.likes + 1 };
        case "SHOW_TEXT":
            return { ...state, showText: !state.showText };
        default:
            return state;
    }
}
const App = () => {
    const [state, dispatch] = useReducer(reducer , {likes: 0, showText: false});
    return (
        <div className="App">
            <h1>Likes: {state.likes}</h1>
            <button onClick={() => {
                dispatch({type: "LIKE"});
                dispatch({type: "SHOW_TEXT"})
            }}>Like</button>
            {state.showText && <p>Show Text</p>}
        </div>
    );
}

export default App;