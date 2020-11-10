import React from 'react'
import SHOP_DATA from'./shop.data'
import  CollectionPreview  from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        // Esta es la lista de datos para el uso de las paginas
        this.state = {
            collections: SHOP_DATA
        };
    }
    render(){
        const {collections} = this.state;
        return(
        // aqui se filtra el array para que solo coloque cuatro datos
            <div className="shop-page">
                {collections
                .filter((item, idx)=> idx < 4)
                .map(({id, ...otherCollectionsProps})=>(
                    <CollectionPreview key={id} {...otherCollectionsProps}/>
                ))}     
            </div>
        ) 
    };
}

export default ShopPage