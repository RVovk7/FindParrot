import * as React from 'react';
import ProductItem from 'components/MainPage/ProductItem';
export interface ProductListProps {
    ProductData: {
        title: string,
        image: string,
    }[];
}

export default class ProductList extends React.Component<ProductListProps, any> {
    public render() {
        const { ProductData } = this.props;
        return (
            <div className="productList">
                {ProductData.map(e => <ProductItem key={e.title} title={e.title} image={e.image} />)}
            </div>
        );
    }
}
