import ItemContext from "./ItemContext";


const ItemState=(props)=>{
    const Items=[
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:1,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        }
    ]

    return (
        <ItemContext.Provider value={{Items}}>
            {props.children}
        </ItemContext.Provider>
    )
}
export default ItemState;