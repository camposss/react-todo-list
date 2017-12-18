import React from 'react';
import Modal from './modal';


export default props => {
    const {complete}= props.item;
    const style= {
        textDecoration:'line-through',
        color: '#ddd'
    };
    return(
        <li className='collection-item row' >
            <div style={complete? style: {}} className='col s11'>
                {props.item.title}
            </div>
            <div className='col s1'>
                <Modal/>
                <button onClick={()=> props.delete(props.index)} className='btn-floating btn red'>
                    <i className=' material-icons'>delete_forever</i>
                </button>
                <button onClick={()=>props.complete(props.index)} className={`btn btn-floating ${complete? 'green': 'blue'}`}>
                    <i className='material-icons'> {complete? 'undo': 'check'}</i>
                </button>
            </div>
        </li>
    )
}