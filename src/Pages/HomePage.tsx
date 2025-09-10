
import './HomePage.css'
import { Header } from '../components/Header'
import HomeFavicon from "../assets/images/favicons/home-favicon.png"
import CottonSocks from "../assets/images/products/athletic-cotton-socks-6-pairs.jpg"
// import Rating45 from "../assets/images/ratings/rating-45.png"
import Checkmark from "../assets/images/icons/checkmark.png"
// import Basketball from "../assets/images/products/intermediate-composite-basketball.jpg"
// import Rating40 from "../assets/images/ratings/rating-40.png"
// import TealShirts from "../assets/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
import { products } from "../data/products.js"

export function HomePage() {
    return (
        <>
            <title>E-Commerce Website</title>
            <link rel="icon" type="image/png" href={HomeFavicon} />
            <Header />
            <div className="home-page">
                <div key = {products.id} className="products-grid">
                    {products.map((product: string[]) => {
                        return (
                            <div className="product-container">
                                <div className="product-image-container">
                                    <img className="product-image"
                                        src={product.image} />
                                </div>

                                <div className="product-name limit-text-to-2-lines">
                                    {product.name}
                                </div>

                                <div className="product-rating-container">
                                    <img className="product-rating-stars"
                                        src={`images/ratings/rating-${product.rating.stars * 10}`} />
                                    <div className="product-rating-count link-primary">
                                        {product.rating.count}
                                    </div>
                                </div>

                                <div className="product-price">
                                    ${(product.priceCents / 100).toFixed(2)}
                                </div>

                                <div className="product-quantity-container">
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                                <div className="product-spacer"></div>

                                <div className="added-to-cart">
                                    <img src={Checkmark} />
                                    Added
                                </div>

                                <button className="add-to-cart-button button-primary">
                                    Add to Cart
                                </button>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

