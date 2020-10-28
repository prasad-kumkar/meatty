import React from 'react'
import { useStateValue } from "./StateProvider";
import "./styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct"

export default function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div class="checkout-ad">
                <p><b>Pay faster for all your shopping needs with <red>Amazon Pay balance</red></b></p>
                <p>Get Instant refund on cancellations | Zero payment failures</p>
            </div>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more items
                        click on "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                    <div>
                        <h2>Your Shopping Basket</h2>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    item={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                >
                                </CheckoutProduct>
                            )
                            )
                        }
                    </div>
                )
            }
        </div >
    )
}