import React from 'react'
import "./styles/Product.css"
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                price,
                image,
                rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <s>{parseInt(price) + 10}</s>
                    <strong>    {price}</strong>
                    <p>per KG</p>
                    <br />
                </p>
                <div className="product-rating">
                    {
                        Array(parseInt(rating))
                            .fill()
                            .map((_) => (
                                <span>⭐</span>
                            )
                            )
                    }
                </div></div>
            <img src={image} alt="product-image"></img>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}



export default Product

