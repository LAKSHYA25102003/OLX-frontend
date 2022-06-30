import React, { useEffect } from 'react'
import { useContext } from 'react'
import ItemContext from '../Context/item/ItemContext'
import Item from './Item'

function ItemCollection() {

  const context=useContext(ItemContext);
  const {items,fetchItem}=context;
  const getItem=async ()=>{
    await fetchItem()
  }
  useEffect(()=>{
    getItem()
  },[])
  return (
    <div className='container'>
      <div className='row my-4'>
          {
            items.map((item)=>{
              return (
              <Item item={item} del={false} key={item.id}/>
              );
            })
          }
      </div>
    </div>
  )
}

export default ItemCollection
