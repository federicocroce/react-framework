import React from 'react';

const List = props => {

    const list = props.list;

    return (
        <div className='list-container'>
            {list.length > 0 ? list.map((item, index) => { return <React.components.Item key={index} index={index} item={item} /> }) : <React.components.Spinner />}
        </div>
    );
}

export default List;