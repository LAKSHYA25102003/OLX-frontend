import ItemContext from "./ItemContext";


const ItemState=(props)=>{
    const Items=[
        {
            name:"lakshya",
            id:1
        },
        {
            name:"lakshya",
            id:2
        },
        {
            name:"lakshya",
            id:3
        },
        {
            name:"lakshya",
            id:4
        },
        {
            name:"lakshya",
            id:5
        },
        {
            name:"lakshya",
            id:6
        },
        {
            name:"lakshya",
            id:7
        },
        {
            name:"lakshya",
            id:8
        },
        {
            name:"lakshya",
            id:9
        },
        {
            name:"lakshya",
            id:10
        },
        {
            name:"lakshya",
            id:11
        },
        {
            name:"lakshya",
            id:12
        },
        {
            name:"lakshya",
            id:13
        }
    ]

    return (
        <ItemContext.Provider value={{Items}}>
            {props.children}
        </ItemContext.Provider>
    )
}
export default ItemState;