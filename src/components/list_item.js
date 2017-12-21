import React from 'react';
import Modal from './modal';


export default props => {
    const {complete}= props.item;
    const style= {
        textDecoration:'line-through',
        color: '#ddd'
    };
    const modalMessage= (
        <div>
            <h4>Are you sure you want to delete this item?</h4>
            <ul>
                <li>{props.item.title}</li>
            </ul>
        </div>
    );
    return(
        <li className='collection-item row' >
            <div style={complete? style: {}} className='col s10'>
                {props.item.title}
            </div>
            <div className='col s2'>
                <Modal callback={()=> props.delete(props.item._id)} text={modalMessage} className='btn btn-floating red'>
                    <i className='material-icons'>delete_forever</i>
                </Modal>
                {/*<button onClick={()=> props.delete(props.index)} className='btn-floating btn red'>*/}
                    {/*<i className=' material-icons'>delete_forever</i>*/}
                {/*</button>*/}
                <button onClick={()=>props.complete(props.item._id)} className={`btn btn-floating ${complete? 'green': 'blue'}`}>
                    <i className='material-icons'> {complete? 'undo': 'check'}</i>
                </button>
            </div>
        </li>
    )
}