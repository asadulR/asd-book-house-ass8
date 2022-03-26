import React from 'react';
import './Book.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Book = (props) => {
    //  Destructuring 
    const {img, name, price, ratings} = props.product;

    const {handleAddToCart} = props;
   
    return (
        <div className='book-card text-center mb-4'>
            <img className='img-fluid' src={img} alt="" />
            <h5 className='mt-1 text-primary'>{name}</h5>
            <p className='m-0'>Price: ${price}</p>
            <p className='mt-1'>Ratings: {ratings}</p>
            <button onClick={ () => handleAddToCart(props.product)} className='hovered-btn fw-bold py-2 w-75 mx-auto border-0  text-white'>ADD TO CART <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Book;