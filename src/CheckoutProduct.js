import React from 'react'

function CheckoutProduct(id, title, price, rating, image) {
    return (
        <div className="checkout-product">
            <img className="checkout-product-image" src={image} alt=""></img>
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">
                    {
                        Array(parseInt(rating))
                            .fill()
                            .map((_) => (
                                <span role="img" aria-label="star">⭐</span>
                            )
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
