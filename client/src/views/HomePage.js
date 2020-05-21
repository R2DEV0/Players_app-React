import React,{useEffect, useState} from 'react';
import {Link} from '@reach/router';
import PlayerList from '../components/PlayerList';
import axios from 'axios';

export default (props) => {
    const{player, setPlayer, id, setId} = props;
    const[loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
        .then(res => {
            setPlayer(res.data);
            setLoaded(true)
        })
    }, []);


    return(
        <div style={{marginLeft: '2%'}}> 
            <div className='topBar'style={{ fontSize: '20px' }}>
                <table>
                    <th style={{paddingRight:'10px'}}>List Players</th> |
                    <th style={{paddingLeft:'10px'}}><Link to ='/add' style={{color:'#4682B4'}}>Add Player</Link></th>
                </table>
                {loaded && <PlayerList player={player} setPlayer={setPlayer} id={id} setId={setId} />}
            </div> 
        
        </div>
    )
}