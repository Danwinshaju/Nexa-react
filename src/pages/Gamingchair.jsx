import React from 'react'
// import './Gamingchair.css'
import GamingChair1 from '../images/chair/2.avif'
import GamingChair2 from '../images/chair/3.avif'
import GamingChair3 from '../images/chair/4.avif'
import GamingChair4 from '../images/chair/5.avif'
import GamingChair5 from '../images/chair/6.avif'
import GamingChair6 from '../images/chair/7.avif'
import GamingChair7 from '../images/chair/8.avif'
import GamingChair8 from '../images/chair/9.avif'


const gamingchair = () => {
  return (
    <div>  
         {/* <!-- PRODUCTS --> */}

    <section className="products-section py-5">

        <div className="container">

            <div className="section-title text-center mb-5">

                <h2>
                    Gaming Chair Collection
                </h2>

                <p>
                    Best Gaming Chair For Pro Gamers
                </p>

            </div>

            <div className="row g-4">

                {/* <!-- PRODUCT 1 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="product-card">

                        <div className  ="product-image">

                            <img src={GamingChair1} alt="Gaming Chair 1"/>

                            <span className="sale-badge">
                                SALE
                            </span>

                        </div>

                        <div className="product-content">

                            <h5>
                                Razer Viper
                            </h5>

                            <div className="rating">

                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>

                            <div className="price">

                                <span className="new-price">
                                    $99
                                </span>

                                <span className="old-price">
                                    $130
                                </span>

                            </div>

                            <button className="btn cart-btn rounded-pill fw-bold px-4">
    <i className="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 2 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="product-card">

                        <div className="product-image">

                            <img src={GamingChair2} alt="Gaming Chair 2"/>    

                        </div>

                        <div className="product-content">

                            <h5>
                                Logitech G Pro
                            </h5>

                            <div className="rating">

                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>

                            <div className="price">

                                <span className="new-price">
                                    $120
                                </span>

                            </div>

                            <button className="btn cart-btn rounded-pill fw-bold px-4">
    <i className="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 3 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="product-card">

                        <div className="product-image">

                            <img src={GamingChair3} alt="Gaming Chair 3"/>

                        </div>

                        <div className="product-content">

                            <h5>
                                ASUS ROG
                            </h5>

                            <div className="rating">

                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>

                            <div className="price">

                                <span className="new-price">
                                    $150
                                </span>

                            </div>

                            <button className="btn cart-btn rounded-pill fw-bold px-4">
    <i className="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 4 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="product-card">

                        <div className="product-image">

                            <img src={GamingChair4} alt="Gaming Chair 4"/>

                        </div>

                        <div className="product-content">

                            <h5>
                                Corsair RGB
                            </h5>

                            <div className="rating">

                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>

                            <div className="price">

                                <span className="new-price">
                                    $89
                                </span>

                            </div>

                            <button className="btn cart-btn rounded-pill fw-bold px-4">
    <i className="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 5 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="product-card">

                        <div className="product-image">

                            <img src={GamingChair5} alt="Gaming Chair 5"/>

                        </div>

                        <div className="product-content">

                            <h5>
                                SteelSeries Rival
                            </h5>

                            <div className="rating">

                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>

                            <div className="price">

                                <span className="new-price">
                                    $110
                                </span>

                            </div>

                            <button className="btn cart-btn rounded-pill fw-bold px-4">
    <i className="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 6 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="product-card">

                        <div className="product-image">

                            <img src={GamingChair6} alt="Gaming Chair 6"/>

                        </div>

                        <div className="product-content">

                            <h5>
                                HyperX Pulsefire
                            </h5>

                            <div className="rating">

                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>

                            <div className="price">

                                <span className="new-price">
                                    $95
                                </span>

                            </div>

                            <button className="btn cart-btn rounded-pill fw-bold px-4">
    <i className="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 7 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="product-card">

                        <div className="product-image">

                            <img src={GamingChair7} alt="Gaming Chair 7"/>

                        </div>

                        <div className ="product-content">

                            <h5>
                                Alienware Mouse
                            </h5>

                            <div className="rating">

                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>

                            <div className="price">

                                <span className="new-price">
                                    $140
                                </span>

                            </div>

                            <button className="btn cart-btn rounded-pill fw-bold px-4">
    <i className="fas fa-cart-shopping me-2"></i>
    Add To Cart
</button>
                        </div>

                    </div>

                </div>

                {/* <!-- PRODUCT 8 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="product-card">

                        <div className="product-image">

                            <img src={GamingChair8} alt="Gaming Chair 8"/>

                        </div>

                        <div className ="product-content">

                            <h5>
                                MSI RGB Mouse
                            </h5>

                            <div className="rating">

                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>

                            <div className="price">

                                <span className="new-price">
                                    $100
                                </span>

                            </div>

                            <button className="btn cart-btn rounded-pill fw-bold px-4">
    <i className="fas fa-cart-shopping me-2"></i>
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

export default gamingchair