import { useState } from "react";
import Tasks from "./Tasks";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Header = () => {

    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const cdate = day + " " + monthNames[month] + " " + year;

    const [currDate, setCurrDate] = useState(cdate);

    const handleChange = (e) => {
        var val = e.target.value;
        const [y, m, d] = val.split("-");
        var mn = parseInt(m);
        var dt = d + " " + monthNames[mn - 1] + " " + y;
        setCurrDate(dt);
        e.target.value = `${y}-${m}-${d}`
    }


    const styles = {
        textAlign: "center",
        fontFamily: "cursive",
        color: "#07689F",
        fontWeight: "bolder"
    }

    return (
        <div className="header">
            <h2 style={{
                fontFamily: "cursive",
                color: "#7AC7C4",
                fontWeight: "bolder"
            }}>{currDate}</h2>
            <input type="date" onChange={handleChange} />
            <h1 style={styles}>TASKS FOR THE DAY</h1>
            <Link to={`/add/${currDate}`} ><Button variant="outline-primary">Add Todos</Button></Link>
            <br /><br />
            <Tasks curdate={currDate}></Tasks>
        </div>
    );

}

export default Header;