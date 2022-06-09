import React from 'react'

function Item(props) {
    const { name } = props.item;
    return (
        <div className='col-md-3 my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={require("../../src/Images/OLXlogo.png")} alt="Card image cap" />
                <div className="card-body">
                    <p>Name:{name}</p>
                    <p className="card-text">itemChildren</p>
                </div>
            </div>
        </div>
    )
}

export default Item
