import "./Tracking.css"
import { Header } from '../components/Header'
import { Link } from 'react-router'
import TrackingFavicon from "../assets/../assets/images/favicons/tracking-favicon.png"
import AthleticSocks from "../assets/images/products/athletic-cotton-socks-6-pairs.jpg"

export function Tracking() {
    return (
        <>
            <title>Tracking</title>
            <link rel="icon" type="image/png" href={TrackingFavicon} />
            <Header/>
            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        Arriving on Monday, June 13
                    </div>

                    <div className="product-info">
                        Black and Gray Athletic Cotton Socks - 6 Pairs
                    </div>

                    <div className="product-info">
                        Quantity: 1
                    </div>

                    <img className="product-image" src={AthleticSocks} />

                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}