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

    const [cart, setCart] = useState([]);
    // console.log(cart)

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    const [randomBook, setRandomBook] = useState([])
    function getRandomCart (list) {
        const randomItem = list[Math.floor((Math.random()*list.length))];
        setRandomBook(randomItem);
    }
    
    return (
        <div className='row mx-auto container'>
            <div className="products-container col-6 col-md-9">
                <h2 className='text-center text-success my-5'>Choose Your Favourite Books</h2>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        products.map(product => <Book 
                            key = {product.id}
                            product = {product}
                            handleAddToCart ={handleAddToCart}
                            ></Book>)
                    }
                </Row>
            </div>
            <div className="products-cart col-6 col-md-3">
                <h5 className='text-center my-4'>Selected Books</h5>
                {
                    cart.map((singleCart) => (
                        <p key = {singleCart.id}>{singleCart.name}</p>
                    ))

                }
                <button type='button' onClick={ () =>getRandomCart(cart)} data-bs-toggle="modal" data-bs-target="#exampleModal">CHOOSE ONE</button>
                <h2>{randomBook.name}</h2>
                </div>
            </div>
    );
};

export default Shop;