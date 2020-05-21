import React,{useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';
import axios from 'axios';

export default (props) => {
    const{name, setName, position, setPosition, id, setPlayer, player} = props;
    const [errors, setErrors] = useState([]);

    
    useEffect(()=> {
        axios.get('http://localhost:8000/api/players/'+id)
            .then(res=> {
                setPlayer(res.data.player)
            })
    },[])


    const onSubmit = (e, data) =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/update/'+id, data)
            .then(res=> {
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr=[];

                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }


    return(
        <div style={{marginLeft: '2%'}}>
            <div className='topBar'style={{ fontSize: '20px' }}>
                <table>
                    <th style={{paddingRight:'10px'}}><Link to ='/' style={{color:'#4682B4'}}>List Players</Link></th> |
                    <th style={{paddingLeft:'10px'}}><Link to ='/add' style={{color:'#4682B4'}}>Add Player</Link></th>
                </table>
                <h4 style={{marginLeft: '37%'}}>Edit: {player.name} </h4>
                <h4 style={{marginLeft: '37%'}}> Current Position: {player.position}</h4>
                <Form name={name} setName={setName} position={position} setPosition={setPosition} onSubmit={onSubmit} id={id}/>
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