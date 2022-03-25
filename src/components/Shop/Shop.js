import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Book from '../Book/Book';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    return (
        <div className='row mx-auto container'>
            <div className="products-container col-6 col-md-9">
                <h2 className='text-center text-success my-4'>Choose 4 Books</h2>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        products.map(product => <Book 
                            key = {product.id}
                            product = {product}
                            ></Book>)
                    }
                </Row>
            </div>
            <div className="products-cart col-6 col-md-3">
                <h5 className='text-center my-4'>Selected Books</h5>
            </div>
        </div>
    );
};

export default Shop;