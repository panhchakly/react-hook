import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setComments(res.data);
        }, []);
    })
    return (
        <div className="App">
            <h1>Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.body}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;