import React from 'react'

function Item(props) {
    const { item } = props;
    return (
        <div className='col-md-3 my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={item.img} alt="Card image cap" />
                <div className="card-body">
                    <p>{item.price}</p>
                    <p className="card-text">{item.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Item
