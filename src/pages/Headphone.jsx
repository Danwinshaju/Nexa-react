import React from 'react'
import './Headphone.css';
import Headphone1 from '../images/headphones/1.avif'
import Headphone2 from '../images/headphones/2.avif'
import Headphone3 from '../images/headphones/3.avif'
import Headphone4 from '../images/headphones/4.avif'
import Headphone5 from '../images/headphones/10.avif'
import Headphone6 from '../images/headphones/6.avif'
import Headphone7 from '../images/headphones/7.avif'
import Headphone8 from '../images/headphones/8.avif'

const Headphone = () => {
  return (
    <div><section class="products-section py-5">

        <div class="container">

            <div class="section-title text-center mb-5">

                <h2>
                    Gaming Headset Collection
                </h2>

                <p>
                    Best Gaming Headset For Pro Gamers
                </p>

            </div>

            <div class="row g-4">

                {/* <!-- PRODUCT 1 --> */}

                <div class="col-md-6 col-lg-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Headphone1} alt="Headphone 1"/>

                            <span class="sale-badge">
                                SALE
                            </span>

                        </div>

                        <div class="product-content">

                            <h5>
                                Razer BlackShark V2
                            </h5>

                            <div class="rating">

                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>

                            </div>

                            <div class="price">

                                <span class="new-price">
                                    $99
                                </span>

                                <span class="old-price">
                                    $130
                                </span>

                            </div>

                            <button class="btn cart-btn rounded-pill fw-bold px-4">
    <i class="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 2 --> */} 

                <div class="col-md-6 col-lg-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Headphone2} alt="Headphone 2"/>

                        </div>

                        <div class="product-content">

                            <h5>
                                Logitech G Pro
                            </h5>

                            <div class="rating">

                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>

                            </div>

                            <div class="price">

                                <span class="new-price">
                                    $120
                                </span>

                            </div>

                            <button class="btn cart-btn rounded-pill fw-bold px-4">
    <i class="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 3 --> */}  

                <div class="col-md-6 col-lg-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Headphone3} alt="Headphone 3"/>

                        </div>

                        <div class="product-content">

                            <h5>
                                ASUS ROG
                            </h5>

                            <div class="rating">

                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>

                            </div>

                            <div class="price">

                                <span class="new-price">
                                    $150
                                </span>

                            </div>

                            <button class="btn cart-btn rounded-pill fw-bold px-4">
    <i class="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 4 --> */}

                <div class="col-md-6 col-lg-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Headphone4} alt="Headphone 4"/>

                        </div>

                        <div class="product-content">

                            <h5>
                                Corsair RGB
                            </h5>

                            <div class="rating">

                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>

                            </div>

                            <div class="price">

                                <span class="new-price">
                                    $89
                                </span>

                            </div>

                            <button class="btn cart-btn rounded-pill fw-bold px-4">
    <i class="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 5 --> */}

                <div class="col-md-6 col-lg-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Headphone5} alt="Headphone 5"/>

                        </div>

                        <div class="product-content">

                            <h5>
                                SteelSeries Rival
                            </h5>

                            <div class="rating">

                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>

                            </div>

                            <div class="price">

                                <span class="new-price">
                                    $110
                                </span>

                            </div>

                            <button class="btn cart-btn rounded-pill fw-bold px-4">
    <i class="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 6 --> */}

                <div class="col-md-6 col-lg-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Headphone6} alt="Headphone 6"/>

                        </div>

                        <div class="product-content">

                            <h5>
                                HyperX Pulsefire
                            </h5>

                            <div class="rating">

                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>

                            </div>

                            <div class="price">

                                <span class="new-price">
                                    $95
                                </span>

                            </div>

                            <button class="btn cart-btn rounded-pill fw-bold px-4">
    <i class="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 7 --> */}

                <div class="col-md-6 col-lg-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Headphone7} alt="Headphone 7"/>

                        </div>

                        <div class="product-content">

                            <h5>
                                Alienware Mouse
                            </h5>

                            <div class="rating">

                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>

                            </div>

                            <div class="price">

                                <span class="new-price">
                                    $140
                                </span>

                            </div>

                            <button class="btn cart-btn rounded-pill fw-bold px-4">
    <i class="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 8 --> */}

                <div class="col-md-6 col-lg-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Headphone8} alt="Headphone 8"/>

                        </div>

                        <div class="product-content">

                            <h5>
                                MSI RGB Mouse
                            </h5>

                            <div class="rating">

                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>

                            </div>

                            <div class="price">

                                <span class="new-price">
                                    $100
                                </span>

                            </div>

                            <button class="btn cart-btn rounded-pill fw-bold px-4">
    <i class="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
</div>
  )
}

export default Headphone