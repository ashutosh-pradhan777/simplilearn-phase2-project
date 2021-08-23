import { useEffect, useState } from "react";
import Tasklist from "./Tasklist"
const Tasks = ({curdate}) => {

    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/todos')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data)
           // console.log(data);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <Tasklist todo_data={data.filter((ele) => ele.date === curdate)}/>
    );
}

export default Tasks;