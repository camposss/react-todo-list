import React, {Component} from 'react';


class ListContainer extends Component{
    render(){
        console.log('todo data:', this.props.list);

        const list= this.props.list.map((item,index)=>{
           return <li key={index} className='collection-item'>{item.title} </li>
        });

        return(
            <div>
                <ul className='collection'>
                    {list}
                </ul>
            </div>
        )
    }
}
export default ListContainer;