import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Book from '../Book/Book';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    // useEffect for Data fetch
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    const [cart, setCart] = useState([]);

    // handle Add to cart Button
    const handleAddToCart = (product) => {
        if(!(cart.length >= 4)){
            const newCart = [...cart, product];
            setCart(newCart);
        }
    }


    //  randomly selecting an Book to buy
    const [randomBook, setRandomBook] = useState([])
    const getRandomCart = (list) => {
        const randomItem = list[Math.floor((Math.random()*list.length))];
        setRandomBook(randomItem);
    }
    
    //  reseting choosen Book cart
    const removeCartItems = () => {
        setCart([]);
        setRandomBook([]);
    }
    return (
        <div className='row mx-auto container'>
            <div className="products-container my-3 col-8 col-md-9">
                <h2 className='text-center text-success my-5'>Choose Your Favourite Books</h2>

                <Row xs={1} md={2} lg={3} className="g-2">
                    {
                        products.map(product => <Book 
                            key = {product.id}
                            product = {product}
                            handleAddToCart ={handleAddToCart}
                            ></Book>)
                    }
                </Row>
            </div>

            {/*  prosucts cart area */}
            <div className="products-cart col-4 col-md-3">
                <h5 className='text-center fw-bold my-4 text-primary'>Selected Books</h5>
                {
                    cart.map((singleCart) => (
                        <div className='d-flex'>
                            <img className='selectedCartImg me-1' src={singleCart.img} alt="" />
                            <p className='text-success' key = {singleCart.id}>{singleCart.name}</p>
                        </div>
                    ))

                }
                {/* Mantain chossen books from cart */}
                    <div className="btn-area text-center">
                        <button className='d-block mx-auto btn-success border-0 p-2 mt-4 rounded' onClick={ () =>getRandomCart(cart)}>CHOOSE ONE</button>
                        <button className='btn-danger border-0 p-2 rounded mt-2' onClick={ () =>removeCartItems()}>CHOOSE AGAIN</button>
                    </div>
                    <div className='randomItem mt-5 p-2 text-white text-center'>
                        <p className=' text-primary text-center fw-bold'>Random Book</p>
                        <img className='img-fluid' src={randomBook.img} alt="" />
                        <p>{randomBook.name}</p>
                    </div>
                </div>
            </div>
    );
};

export default Shop;