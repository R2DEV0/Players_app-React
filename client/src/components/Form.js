import React, { useEffect } from 'react';


export default (props) => {
    const{setName, setPosition, onSubmit, name, position, id} = props;

    useEffect(() => {
        setName('');
        setPosition('');
    },[])

    return(
        <div style={{marginTop:'5px', marginLeft:'38%'}}>
        <div style={{border: '1px solid black', display: 'inline-block', padding: '15px 30px 30px 30px', marginLeft: '-20px'}}>
            <form className='form' onSubmit={e => onSubmit(e, {name, position})}>
                <div className='field-row'>
                    <label>Enter Player Name:</label>
                    <input type='text' name ={name} style={{width:'250px'}} onChange={(e)=> {setName(e.target.value)}}/>
                </div>
                <div className='field-row' style={{marginTop: '2%'}}>
                    <label>Enter Team Position:</label>
                    <select type='select' name={position}  onChange={(e)=> {setPosition(e.target.value)}}>
                        <option value=''>select one</option>
                        <option value='runner'>runner</option>
                        <option value='catcher'>catcher</option>
                        <option value='goal master'>goal master</option>
                        <option value='snack guy'>snack guy</option>
                        <option value='person who does nothing'>person who does nothing</option>
                        <option value='coach'>coach</option>
                        <option value='team captin'>team captin</option>
                    </select>
                </div>
                <button style={{marginLeft: '85px', marginTop: '40px', marginRight:'5px', fontWeight: 'bold'}}>Submit</button>
                <button type='reset' style={{fontWeight: 'bold'}}>Reset</button>
            </form>
        </div>
        </div>
    )
}