import React from 'react'
import Carousel1 from '../images/carousel/1.avif'
import Carousel2 from '../images/carousel/2.avif'
import Carousel3 from '../images/carousel/3.avif'           
import Carousel5 from '../images/carousel/5.avif'
import Featured1 from '../images/mouse/10.jpg'
import Featured2 from '../images/chair/2.avif'
import Featured3 from '../images/headphones/1.avif'
import Featured4 from '../images/carousel/1.avif'
import video1 from '../videos/index/1.mp4'
import video2 from '../videos/index/2.mp4'
import video3 from '../videos/index/3.mp4'
import './Home.css';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      {/* <!-- HERO SECTION --> */}

    <section className="py-5 bg-black">

        <div className="container">

            <div className="row align-items-center min-vh-100 g-5">

                {/* <!-- LEFT --> */}

                <div className="col-lg-6 text-center text-lg-start">

                    <span className="badge bg-info text-dark px-4 py-2 rounded-pill mb-4 fs-6">

                        #1 Gaming Store

                    </span>

                    <h1 className="display-2 fw-bold lh-sm">

                        Level Up Your

                        <span className="text-info">

                            Gaming

                        </span>

                        Setup

                    </h1>

                    <p className="text-secondary fs-5 my-4">

                        Discover premium gaming accessories, RGB keyboards,
                        headsets, gaming chairs, and futuristic setups designed
                        for pro gamers.

                    </p>

                    {/* <!-- BUTTONS --> */}

                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">

                        <button className="btn btn-info btn-lg fw-bold rounded-pill px-5">

                            <a className="text-white text-decoration-none" href="./product.html">Shop Now</a>

                        </button>

                        <button className="btn btn-outline-light btn-lg rounded-pill px-5">

                            Explore

                        </button>

                    </div>

                    {/* <!-- STATS --> */}

                    <div className="row mt-5 text-center text-lg-start">

                        <div className="col-4">

                            <h3 className="fw-bold text-info">
                                10K+
                            </h3>

                            <p className="text-secondary">
                                Products
                            </p>

                        </div>

                        <div className="col-4">

                            <h3 className="fw-bold text-info">
                                5K+
                            </h3>

                            <p className="text-secondary">
                                Gamers
                            </p>

                        </div>

                        <div className="col-4">

                            <h3 className="fw-bold text-info">
                                24/7
                            </h3>

                            <p className="text-secondary">
                                Support
                            </p>

                        </div>

                    </div>

                </div>

                {/* <!-- RIGHT --> */}

                <div className="col-lg-6 text-center position-relative">

                    {/* <!-- CAROUSEL --> */}

                    <div id="gamingCarousel"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                        data-bs-interval="5000">

                        {/* <!-- INDICATORS --> */}

                        <div className="carousel-indicators">

                            <button type="button"
                                data-bs-target="#gamingCarousel"
                                data-bs-slide-to="0"
                                className="active">
                            </button>

                            <button type="button"
                                data-bs-target="#gamingCarousel"
                                data-bs-slide-to="1">
                            </button>

                            <button type="button"
                                data-bs-target="#gamingCarousel"
                                data-bs-slide-to="2">
                            </button>

                        </div>

                        {/* <!-- IMAGES --> */}

                        <div className="carousel-inner rounded-4 shadow-lg">

                            <div className="carousel-item active">

                                <img src={Carousel1}
                                    className="d-block w-100 rounded-4 object-fit-cover"
                                   style={{ height: '500px' }}
                                    alt="Gaming Mouse"/>

                            </div>

                            <div className="carousel-item">

                                <img src={Carousel2}
                                    className="d-block w-100 rounded-4 object-fit-cover"
                                    style={{ height: '500px' }}
                                    alt="Gaming Setup"/>

                            </div>

                            <div className="carousel-item">

                                <img src={Carousel3}
                                    className="d-block w-100 rounded-4 object-fit-cover"
                                    style={{ height: '500px' }}
                                    alt="Gaming Keyboard"/>

                            </div>

                        </div>

                        {/* <!-- PREV --> */}

                        <button className="carousel-control-prev"
                            type="button"
                            data-bs-target="#gamingCarousel"
                            data-bs-slide="prev">

                            <span className="carousel-control-prev-icon"></span>

                        </button>

                        {/* <!-- NEXT --> */}

                        <button className="carousel-control-next"
                            type="button"
                            data-bs-target="#gamingCarousel"
                            data-bs-slide="next">

                            <span className="carousel-control-next-icon"></span>

                        </button>

                    </div>

                </div>

            </div>

        </div>

    </section>
<section className="py-5 bg-dark">

        <div className="container">

            <div className="text-center mb-5">

                <h2 className="display-5 fw-bold text-info">
                    Featured Products
                </h2>

                <p className="text-secondary">
                    Top gaming accessories for pro gamers
                </p>

            </div>

            <div className="row g-4">

                {/* <!-- CARD 1 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="card bg-black text-light border-0 shadow h-100">

                        <img src={Featured1}
                             alt="Mouse"    
                            className="card-img-top object-fit-cover"
                            style={{ height: '250px' }}/>
                            

                        <div className="card-body text-center">

                            <h5 className="card-title">
                                MOUSE
                            </h5>

                            <p className="text-info fw-bold fs-5">
                                $89
                            </p>

                            <button className="btn btn-info rounded-pill fw-bold px-4">
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>

                {/* <!-- CARD 2 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="card bg-black text-light border-0 shadow h-100">

                        <img src={Featured2}
                            className="card-img-top object-fit-cover"
                            style={{ height: '250px' }}
                            alt="Mouse"/>

                        <div className="card-body text-center">

                            <h5 className="card-title">
                                Chair
                            </h5>

                            <p className="text-info fw-bold fs-5">
                                $59
                            </p>

                            <button className="btn btn-info rounded-pill fw-bold px-4">
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>

                {/* <!-- CARD 3 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="card bg-black text-light border-0 shadow h-100">

                        <img src={Featured3} className="card-img-top object-fit-cover"
                            style={{ height: '250px' }}
                            alt="Headset"/>

                        <div className="card-body text-center">

                            <h5 className="card-title">
                                Gaming Headset
                            </h5>

                            <p className="text-info fw-bold fs-5">
                                $120
                            </p>

                            <button className="btn btn-info rounded-pill fw-bold px-4">
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>

                {/* <!-- CARD 4 --> */}

                <div className="col-md-6 col-lg-3">

                    <div className="card bg-black text-light border-0 shadow h-100">

                        <img src={Featured4}
                            className="card-img-top object-fit-cover"
                            style={{ height: '250px' }}
                            alt="Chair"/>

                        <div className="card-body text-center">

                            <h5 className="card-title">
                                Controller
                            </h5>

                            <p className="text-info fw-bold fs-5">
                                $250
                            </p>

                            <button className="btn btn-info rounded-pill fw-bold px-4">
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
    
    



    

    


    {/* <!-- GAMING SETUP SECTION --> */}

<section className="py-5 bg-black">

    <div className="container">

        {/* <!-- TITLE --> */}

        <div className="text-center mb-5">

            <h2 className="display-4 fw-bold text-info">
                Ultimate Gaming Setup
            </h2>

            <p className="text-secondary fs-5">
                Build your dream RGB gaming station
            </p>

        </div>

        {/* <!-- CONTENT --> */}

        <div className="row align-items-center g-5">

            {/* <!-- IMAGE --> */}

            <div className="col-lg-6">
                <img src={Carousel5} className="img-fluid setup-img" alt="Gaming Setup"/>
            </div>

            {/* <!-- TEXT --> */}

            <div className="col-lg-6">

                {/* <!-- CARD 1 --> */}

                <div className="card bg-dark text-light border-0 shadow-lg mb-4">

                    <div className="card-body d-flex align-items-center">

                        <i className="fas fa-keyboard text-info display-6 me-4"></i>

                        <div>

                            <h4 className="fw-bold">
                                RGB Mechanical Keyboard
                            </h4>

                            <p className="text-secondary mb-0">

                                Ultra-fast switches with customizable RGB lighting.

                            </p>

                        </div>

                    </div>

                </div>

                {/* <!-- CARD 2 --> */}

                <div className="card bg-dark text-light border-0 shadow-lg mb-4">

                    <div className="card-body d-flex align-items-center">

                        <i className="fas fa-headset text-info display-6 me-4"></i>

                        <div>

                            <h4 className="fw-bold">
                                Surround Sound Headset
                            </h4>

                            <p className="text-secondary mb-0">

                                Crystal clear communication for esports gaming.

                            </p>

                        </div>

                    </div>

                </div>

                {/* <!-- CARD 3 --> */}

                <div className="card bg-dark text-light border-0 shadow-lg">

                    <div className="card-body d-flex align-items-center">

                        <i className="fas fa-gamepad text-info display-6 me-4"></i>

                        <div>

                            <h4 className="fw-bold">
                                Pro Gaming Controller
                            </h4>

                            <p className="text-secondary mb-0">

                                Precision controls built for competitive gamers.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

    
<section className="video-section">

    {/* <!-- VIDEO SLIDER --> */}

    <section
  id="gamingVideoSlider"
  className="carousel slide carousel-fade hero-video-slider"
  data-bs-ride="carousel"
  data-bs-interval="5000"
>
  {/* VIDEOS */}
  <div className="carousel-inner">

    {/* VIDEO 1 */}
    <div className="carousel-item active">
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video1} type="video/mp4" />
      </video>
    </div>

    {/* VIDEO 2 */}
    <div className="carousel-item">
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video2} type="video/mp4" />
      </video>
    </div>

    {/* VIDEO 3 */}
    <div className="carousel-item">
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video3} type="video/mp4" />
      </video>
    </div>

  </div>

  {/* OVERLAY */}
  <div className="gaming-overlay"></div>

  {/* RGB LINES */}
  <div className="rgb-line top-line"></div>
  <div className="rgb-line bottom-line"></div>

  {/* HERO CONTENT */}
  <div className="hero-content">

    <h1>DOMINATE THE GAME</h1>

    <p>
      Experience premium gaming accessories,
      esports gear, ultra RGB setups,
      and futuristic gaming performance.
    </p>

    {/* BUTTONS */}
    <div className="hero-buttons">

      <Link to="/products" className="btn-cyan">
        Shop Now
      </Link>

      <Link to="/products" className="btn-outline-gaming">
        Explore Setup
      </Link>

    </div>

  </div>

  {/* INDICATORS */}
  <div className="carousel-indicators">

    <button
      type="button"
      data-bs-target="#gamingVideoSlider"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>

    <button
      type="button"
      data-bs-target="#gamingVideoSlider"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>

    <button
      type="button"
      data-bs-target="#gamingVideoSlider"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>

  </div>
</section>

</section>
    {/* <!-- TOP BRANDS --> */}

    <section className="py-5 bg-black">

        <div className="container">

            <div className="text-center mb-5">

                <h2 className="display-5 fw-bold text-info">
                    Top Gaming Brands
                </h2>

                <p className="text-secondary">
                    Trusted by millions of gamers worldwide
                </p>

            </div>

            <div className="row g-4 text-center">

                <div className="col-6 col-md-3">

                    <div className="card bg-dark border-0 shadow h-100 p-4">

                        <i className="fab fa-playstation display-2 text-info mb-3"></i>

                        <h4 className="fw-bold text-light">
                            PlayStation
                        </h4>

                    </div>

                </div>

                <div className="col-6 col-md-3">

                    <div className="card bg-dark border-0 shadow h-100 p-4">

                        <i className="fab fa-xbox display-2 text-info mb-3"></i>

                        <h4 className="fw-bold text-light">
                            Xbox
                        </h4>

                    </div>

                </div>

                <div className="col-6 col-md-3">

                    <div className="card bg-dark border-0 shadow h-100 p-4">

                        <i className="fas fa-headset display-2 text-info mb-3"></i>

                        <h4 className="fw-bold text-light">
                            Logitech
                        </h4>

                    </div>

                </div>

                <div className="col-6 col-md-3">

                    <div className="card bg-dark border-0 shadow h-100 p-4">

                        <i className="fas fa-keyboard display-2 text-info mb-3"></i>

                        <h4 className="fw-bold text-light">
                            Razer
                        </h4>

                    </div>

                </div>

            </div>

        </div>

</section>
    </div>
  )
}

export default Home