import React from 'react';
import axios from 'axios';


export default (props) => {
    const { id, successCallback } = props;

    const onClick = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/players/'+id)
            .then(res => {
                console.log(res);
                successCallback();
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <button className='button' onClick={ onClick }> Delete </button>
    )
}