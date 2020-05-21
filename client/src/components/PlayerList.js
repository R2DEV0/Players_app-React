import React from 'react';
import {navigate} from '@reach/router';
import DeleteButton from './DeleteButton';

export default (props) => {
    const{player, setPlayer, setId, id} = props;
    

    const removeFromDom = (id) => {
        setPlayer(player.filter(player => player._id !== id))
    }

    const onClick = (e) => {
        e.preventDefault();
        setId(e.target.id)
        navigate('/manage/'+id)
    }

    return(
        <div>
            <table className='table' style={{marginLeft: '31%', background:'#', borderCollapse: 'collapse'}}>
                <thead style={{background: 'lightblue', border:'1px solid black'}}>
                    <tr style={{textAlign:'left', background: '#4682B4'}}>
                        <th style={{padding: '5px'}}>Player Name</th>
                        <th style={{padding: '5px'}}>Team Position</th>
                        <th style={{padding: '5px'}}>Action</th>
                    </tr>
                </thead>
                <tbody style={{overflow:'auto', maxHeight: '500px'}}>
                    {player.map((person, i) => {
                    return <tr key={i} style={{textAlign:'left'}}> <td style={{marginRight:'50%', padding:'5px'}}>{person.name}</td> <td>{person.position}</td> <td style={{padding: '5px'}}> <button style={{marginRight:'3px'}} onClick={onClick} id={person._id}>Edit</button><DeleteButton id={person._id} successCallback={()=>removeFromDom(person._id)}/></td>
                    </tr>})}
                </tbody>
            </table>
        </div>
    )
}