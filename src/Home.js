import React from 'react';
import banner from "./assets/banner.jpg";
import "./styles/Home.css"
import Product from "./Product"
import beef from "./assets/beef.jpg"
import pork from "./assets/pork.jpg"

function Home() {
    return (
        <div className="home">
            <img className="banner-image" src={banner} alt="banner"></img>
            <div className="product-row">
                <Product
                    id="12831"
                    title="Beef"
                    price="19.99"
                    rating="5"
                    image={beef} />

                <Product
                    id="12831"
                    title="Pork"
                    price="29.99"
                    rating="4"
                    image={pork} />
            </div>
            <div className="product-row">
                <Product
                    id="12831"
                    title="Chicken"
                    price="199.99"
                    rating="5"
                    image="https://www.nutritionadvance.com/wp-content/uploads/2017/05/chicken-meat.jpg" />
                <Product
                    id="12832"
                    title="Lamb"
                    price="10.95"
                    rating="4"
                    image="https://www.nutritionadvance.com/wp-content/uploads/2017/05/lamb-meat.jpg" />
                <Product
                    id="12831"
                    title="Turkey"
                    price="15.99"
                    rating="5"
                    image="https://www.nutritionadvance.com/wp-content/uploads/2017/05/turkey-meat.jpg" />
            </div>
            <div className="product-row">
                <Product
                    id="12831"
                    title="Venison"
                    price="39.99"
                    rating="5"
                    image="https://www.nutritionadvance.com/wp-content/uploads/2017/05/venison-meat.jpg" />
            </div>

        </div>

    )
}
export default Home;