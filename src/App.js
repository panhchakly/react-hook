import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
            setData(res.data);
        });
    }, []);

    const findLongestName = (comments) => {
        if(!comments) return null;
        let longestName = "";
        for(let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if(currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log('longestName');
        return longestName;
    }
    return (
        <div className="App">
            <div>{findLongestName(data)}</div>
        </div>
    );
}

export default App;