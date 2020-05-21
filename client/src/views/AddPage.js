import React,{useState} from 'react';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';
import axios from 'axios';

export default (props) => {
    const{name, setName, position, setPosition} = props;
    const [errors, setErrors] = useState([]);

    const onSubmit = (e, data) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', data) 
            .then(res=> {
                navigate('/')
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors;
                const errArr = [];

                for(const key of Object.keys(errorResponse)){
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
            })
    };

    return(
        <div style={{marginLeft: '2%'}}> 
            <div className='topBar'style={{ fontSize: '20px' }}>
                <table>
                    <th style={{paddingRight:'10px'}}><Link to ='/' style={{color:'#4682B4'}}>List Players</Link></th> |
                    <th style={{paddingLeft:'10px'}}>Add Player</th>
                </table>
                <h3 style={{marginLeft: '37%'}}>Please Enter a new Player</h3>
                <Form name={name} setName={setName} position={position} setPosition={setPosition} onSubmit={onSubmit} />
                <div style={{textAlign:'center'}}>
                    {errors.map((error, idx)=> {
                        return(
                            <p style={{ color:'red' }}key={idx}>{error}</p>
                        )
                    })}
                </div>
            </div> 
        </div>
    )
}