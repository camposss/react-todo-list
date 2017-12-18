import React, {Component} from 'react';
import '../assets/css/modal.css';


class Modal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='confirm-modal '>
                    <div className="content-modal">
                        <div className="card">
                            <div className="card-content">
                                <p>This is some text</p>
                            </div>
                            <div className="card-action">
                                <button className='btn green'>Confirm</button>
                                <button className='btn red'>Cancel</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Modal;