import React from 'react'
import './Keyboard.css';
import Keyboard1 from '../images/keyboard/1.avif'
import Keyboard2 from '../images/keyboard/2.avif'
import Keyboard3 from '../images/keyboard/3.avif'
import Keyboard4 from '../images/keyboard/4.avif'
import Keyboard5 from '../images/keyboard/5.avif'
import Keyboard6 from '../images/keyboard/6.avif'
import Keyboard7 from '../images/keyboard/7.avif'
import Keyboard8 from '../images/keyboard/8.avif'

const Keyboard = () => {
  return (
    <div><section class="products-section py-5">

        <div class="container">

            <div class="section-title text-center mb-5">

                <h2>
                    Gaming Keyboard Collection
                </h2>

                <p>
                    Best Gaming Keyboard For Pro Gamers
                </p>

            </div>

            <div class="row g-4">

                {/* <!-- PRODUCT 1 --> */}

                <div class="col-md-6 col-lg-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Keyboard1} alt="Keyboard 1"/>

                            <span class="sale-badge">
                                SALE
                            </span>

                        </div>

                        <div class="product-content">

                            <h5>
                                Razer Viper
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

                            <img src={Keyboard2} alt="Keyboard 2"/>

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

                            <img src={Keyboard3} alt="Keyboard 3"/>

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

                            <img src={Keyboard4} alt="Keyboard 4"/>

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

                            <img src={Keyboard5} alt="Keyboard 5"/>

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

                            <img src={Keyboard6} alt="Keyboard 6"/>

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
{/* 
                <!-- PRODUCT 7 --> */}

                <div class="col-md-6 col-lg-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Keyboard7} alt="Keyboard 7"/>

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

                            <img src={Keyboard8} alt="Keyboard 8"/>

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

export default Keyboard