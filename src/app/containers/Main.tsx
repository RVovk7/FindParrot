import * as React from 'react';
import QuickSearch from 'screen/QuickSearch';
import Products from 'screen/Products';
// import ProductData from 'assets/ProductData';
export default function Main() {

    return (
      <div>
        <QuickSearch />
        <Products /*  ProductData={ProductData} */ />
      </div>
    );
}
