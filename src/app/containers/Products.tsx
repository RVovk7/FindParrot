import * as React from 'react';
import ProductData from 'assets/ProductData';
import ProductItem from 'components/ProductItem';
import ProductTitle from 'screen/ProductTitle';

export default function Products() {
    return (
        <div className="productsDiv">
            <ProductTitle />
            <div className="productList">
                {ProductData.map(e => <ProductItem key={e.title} title={e.title} image={e.image} />)}
            </div>
        </div>
    );
}
