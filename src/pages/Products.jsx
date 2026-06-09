import React from 'react'
import './Products.css';
import Keyboard from '../images/products/1.avif'
import Mouse from '../images/products/2.avif'
import Headset from '../images/products/3.avif'
import Chair from '../images/products/4.avif'
import Monitor from '../images/products/5.avif'
import Controller from '../images/products/6.avif'
import Desk from '../images/products/7.avif'
import Mousepad from '../images/products/8.avif'
import GamingPC from '../images/products/9.avif'
import Mic from '../images/products/10.avif'
import Webcam from '../images/products/11.avif'
import Speakers from '../images/products/12.avif'
const Products = () => {
  return (
    <div><section class="products-section py-5">

        <div class="container">

            <div class="row g-4">

                {/* <!-- PRODUCT 1 --> */}

                <div class="col-md-6 col-lg-4 col-xl-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Keyboard} alt="Keyboard"/>

                            <span class="sale-badge">
                                SALE
                            </span>

                        </div>

                        <div class="product-content">

                            <h5>RGB Gaming Keyboard</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">

                                <span class="new-price">$89</span>
                                <span class="old-price">$120</span>

                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 2 --> */}

                <div class="col-md-6 col-lg-4 col-xl-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Mouse} alt="Mouse"/>

                        </div>

                        <div class="product-content">

                            <h5>Gaming Mouse</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">

                                <span class="new-price">$59</span>

                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 3 --> */}

                <div class="col-md-6 col-lg-4 col-xl-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Headset} alt="Headset"/>

                        </div>

                        <div class="product-content">

                            <h5>Gaming Headset</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">

                                <span class="new-price">$120</span>

                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 4 --> */}

                <div class="col-md-6 col-lg-4 col-xl-3">

                    <div class="product-card">

                        <div class="product-image">

                            <img src={Chair} alt="Chair"/>

                        </div>

                        <div class="product-content">

                            <h5>Gaming Chair</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">

                                <span class="new-price">$250</span>

                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 5 --> */}

                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="product-card">
                        <div class="product-image">
                            <img src={Monitor} alt="Gaming Monitor"/>
                        </div>

                        <div class="product-content">

                            <h5>Gaming Monitor</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">
                                <span class="new-price">$320</span>
                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>
                    </div>
                </div>

                {/* <!-- PRODUCT 6 --> */}

                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="product-card">
                        <div class="product-image">
                            <img src={Controller} alt="Controller"/>
                        </div>

                        <div class="product-content">

                            <h5>Gaming Controller</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">
                                <span class="new-price">$75</span>
                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>
                    </div>
                </div>

                {/* <!-- PRODUCT 7 --> */}

                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="product-card">
                        <div class="product-image">
                            <img src={Desk} alt="Gaming Desk"/>
                        </div>

                        <div class="product-content">

                            <h5>Gaming Desk</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">
                                <span class="new-price">$410</span>
                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>
                    </div>
                </div>

                {/* <!-- PRODUCT 8 --> */}  

                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="product-card">
                        <div class="product-image">
                            <img src={Mousepad} alt="RGB Mouse Pad"/>
                        </div>

                        <div class="product-content">

                            <h5>RGB Mouse Pad</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">
                                <span class="new-price">$35</span>
                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>
                    </div>
                </div>

                {/* <!-- PRODUCT 9 --> */}

                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="product-card">
                        <div class="product-image">
                            <img src={GamingPC} alt="Gaming PC"/>
                        </div>

                        <div class="product-content">

                            <h5>Gaming PC</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">
                                <span class="new-price">$1499</span>
                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>
                    </div>
                </div>

                {/* <!-- PRODUCT 10 --> */}

                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="product-card">
                        <div class="product-image">
                            <img src={Mic} alt="Streaming Mic"/>
                        </div>

                        <div class="product-content">

                            <h5>Streaming Mic</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">
                                <span class="new-price">$95</span>
                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>
                    </div>
                </div>
{/* 
                <!-- PRODUCT 11 --> */}

                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="product-card">
                        <div class="product-image">
                            <img src={Webcam} alt="Gaming Webcam"/>
                        </div>

                        <div class="product-content">

                            <h5>Gaming Webcam</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">
                                <span class="new-price">$70</span>
                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>
                    </div>
                </div>

                {/* <!-- PRODUCT 12 --> */}

                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="product-card">
                        <div class="product-image">
                            <img src={Speakers} alt="Gaming Speakers"/>
                        </div>

                        <div class="product-content">

                            <h5>Gaming Speakers</h5>

                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <div class="price">
                                <span class="new-price">$140</span>
                            </div>

                            <button class="btn cart-btn">
                                <i class="fas fa-cart-shopping me-2"></i>
                                Add To Cart
                            </button>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section></div>
  )
}

export default Products