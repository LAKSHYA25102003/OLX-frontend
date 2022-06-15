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
            id:2,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:3,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:4,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:5,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:6,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:7,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:8,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:9,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:10,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:11,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:12,
            img:"https://apollo-singapore.akamaized.net/v1/files/pofzexa9t2h22-IN/image;s=300x600;q=60",
            price:"120,000",
            desc:"Good Product"
        },
        {
            id:13,
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