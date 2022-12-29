import { useContext } from 'react';
import { ProductsContext } from '../../contexts/product.contexts';
import  ProductCard  from '../../components/product-card/product-card.component'
import './ShopPage.styles.scss'


const Shop = () => {

    return(
        <div className="products-container">
        {
            products.map((product)=>(

                <ProductCard key={product.id} product={product}/>

            ))
        }
        </div>
    );
}

export default Shop;