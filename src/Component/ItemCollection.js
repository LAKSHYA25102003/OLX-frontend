import React from 'react'
import { useContext } from 'react'
import ItemContext from '../Context/item/ItemContext'
import Item from './Item'

function ItemCollection() {
  const context=useContext(ItemContext);
  const {Items}=context;
  return (
    <div className='container'>
      <div className='row my-4'>
          {
            Items.map((item)=>{
              return (
              <Item item={item} key={item.id}/>
              );
            })
          }
      </div>
    </div>
  )
}

export default ItemCollection
