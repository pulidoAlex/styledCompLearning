import React from 'react';
import ComplexTitle from './ComplexTitle';
import Product from './Product';

const products = [{nombre: "app1", precio:1}, {nombre: "app2", precio:5}, {nombre: "app3", precio:10}]

const Products = () => {
  return (<section>
    <ComplexTitle title='all products' subtitle={"precios"} />
    {products.map((product) => {
        return (
            <Product{...product} key={products.id}/>
        )
    })}
  </section>);
};

export default Products;
