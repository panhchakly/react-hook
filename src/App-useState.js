import React, { useState } from "react";

const App = () => {
    const [search, setSearch] = useState('');
    const [items, setItems] = useState('');
    const [likes, setLikes] = useState(0);
    const [showText, setShowText] = useState(false);
    return (
        <div className="App">
            <h1>Likes: {likes}</h1>
            <button onClick={() => {setLikes(likes + 1); setShowText(!showText)}}>Like</button>
            {showText && <p>Show Text</p>}
        <hr></hr>
            <h1>Search</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => setItems(search)}>Search</button>
            <h3>items : {items}</h3>
        </div>
    );
}

export default App;