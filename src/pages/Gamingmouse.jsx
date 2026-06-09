    import React from 'react'
    import './Gamingmouse.css';
    import GamingMouse1 from '../images/mouse/1.avif'
    import GamingMouse2 from '../images/mouse/10.jpg'
    import GamingMouse3 from '../images/mouse/9.jpg'
    import GamingMouse4 from '../images/mouse/4.jpg'
    import GamingMouse5 from '../images/mouse/5.jpg'
    import GamingMouse6 from '../images/mouse/6.jpg'
    import GamingMouse7 from '../images/mouse/7.jpg'
    import GamingMouse8 from '../images/mouse/8.jpg'
    const Gamingmouse = () => {
    return (
        <div><section className="products-section py-5">

            <div className="container">

                <div className="section-title text-center mb-5">

                    <h2>
                        Gaming Mouse Collection
                    </h2>

                    <p>
                        Best Gaming Mouse For Pro Gamers
                    </p>

                </div>

                <div className="row g-4">

                        {/* <!-- PRODUCT 1 --> */}

                    <div className="col-md-6 col-lg-3">

                        <div className="product-card">

                            <div className="product-image">

                                <img src={GamingMouse1} alt="mouse"/>

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

                                <img src={GamingMouse2} alt ="mouse"/>

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

                                <img src={GamingMouse3} alt ="mouse"/>
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

                                <img src={GamingMouse4} alt ="mouse"/>

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

                                <img src={GamingMouse5} alt ="mouse"/>

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

                                <img src={GamingMouse6} alt ="mouse"/>

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

                                <img src={GamingMouse7} alt ="mouse"/>

                            </div>

                            <div className="product-content">

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
    {/* 
                    <!-- PRODUCT 8 --> */}

                    <div className="col-md-6 col-lg-3">

                        <div className="product-card">

                            <div className="product-image">

                                <img src={GamingMouse8} alt ="mouse"/>

                            </div>

                            <div className="product-content">

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

        </section></div>
    )
    }

    export default Gamingmouse