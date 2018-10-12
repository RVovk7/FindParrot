import * as React from 'react';
import ProductData from 'assets/data/ProductData';
import ProductList from 'components/ProductList';
import ProductTitle from 'app/screen/MainPage/ProductTitle';
import ProductLink from 'app/screen/MainPage/ProductLink';

export default function Products() {
    return (
        <div className="productsDiv">
            <ProductTitle />
            <ProductList ProductData={ProductData} />
            <ProductLink />
        </div>
    );
}
