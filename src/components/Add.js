import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Add = () => {

    const history = useHistory();
    const {date} = useParams();
    const [state, setstate] = useState({
        item: null
    })

    const handleChange = (event) =>
    {
        const{name,value} = event.target;
        setstate({
            [name] : value
        })
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        axios.post('http://localhost:5001/todos',
        {
            date: date,
            item: state.item,
            isDisabled: false
        })
        .then(res => {
            console.log(res);
            history.push('/')
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mention Your Todos here...</Form.Label>
                <Form.Control as="textarea" name ="item" rows={3} onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form >
    );
}

export default Add;