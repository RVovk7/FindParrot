import * as React from 'react';

export interface IProductItem {
  title: string,
  image: string,
}

export default class ProductItem extends React.Component<IProductItem>{
  public render() {
    const { title, image } = this.props;
    return (
        <div className="productItem">
          <img src={image} alt="icon" />
          <h4>{title}</h4>

      </div>
    );
  }
}
