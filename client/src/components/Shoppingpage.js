// Shopping.js
import React, { useState,useRef } from "react";
import products from "../data/product";
import Slider from "react-slick";
// import { FaShoppingCart } from "react-icons/fa";
import "../css/shopping.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Shopping() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  const carouselRef = useRef(null);

const scrollLeft = () => {
  carouselRef.current.scrollBy({ left: -220, behavior: "smooth" });
};
 const banners = [
    {
      img: require("../images/spices/banner1.jpg"),
      link: "/collections/dates",
    },
    {
      img: require("../images/spices/banner2.jpg"),
      link: "/collections/nuts",
    },
    {
      img: require("../images/spices/banner3.jpg"),
      link: "/collections/dry-fruits",
    },
    {
      img: require("../images/spices/banner4.jpg"),
      link: "/collections/diwali-products",
    },
  ];

const scrollRight = () => {
  carouselRef.current.scrollBy({ left: 220, behavior: "smooth" });
};

const [searchTerm, setSearchTerm] = useState("");

const filteredProducts = products.filter((p) =>
  p.name.toLowerCase().includes(searchTerm.toLowerCase())
);


const customerreviews = [
    {
        para: "It is the best sweet shop as the name standard it surely lives upto it's name one must really try their sweet products"
    },
    {
        para: "Packaging at its best best place to buy quality sweets and delicious sweets all the best time to the whole team"
    },
    {
        para: "I love sweets here all must try here it's very impressive that we can get our home food where ever we want"
    },
    {
        para: "For the quality definitely needs a good rating and review thats why came here .. very delicious whole family enjoied it.. think how it would be after 2 to 3 days but very well packed and came safely ??packaging needs a special appreciation??"
    },
    {
        para: "It is the best sweet shop as the name standard it surely lives upto it's name one must really try their sweet products"
    }
];

const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className="shopping-page">

   {/* ✅ Slider Section */}
      <div className="homeBanner show">
        <div className="homeSlider">
          <Slider {...sliderSettings}>
            {banners.map((b, i) => (
              <div key={i} className="eachImage">
                <img src={b.img} alt={`banner-${i}`} />
                <div className="homeBannerButton">
                  <a href={b.link}>Shop Now</a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

  {/* Search Bar */}
  <div class="search-container">
  <input
    type="text"
    placeholder="Search spices..."
    className="search-bar"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  </div>

  {/* Arrows + Carousel */}
  <div className="d-flex align-items-center">
    <button className="btn btn-light me-2" onClick={scrollLeft}>
      ◀
    </button>

    <div className="carousel-container flex-grow-1" ref={carouselRef}>
      {filteredProducts.map((product) => (
        <div className="card product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "120px",
              objectFit: "cover"
            }}
          />
          <div className="card-body p-2">
            <h6 className="card-title mb-1" style={{ fontSize: "0.9rem" }}>
              {product.name}
            </h6>
            <p className="card-text mb-1" style={{ fontSize: "0.8rem" }}>
              {product.description}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-success" style={{ fontSize: "0.85rem" }}>
                ₹{product.price}
              </span>
              <button
                className="btn btn-sm btn-primary"
                onClick={handleAddToCart}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button className="btn btn-light ms-2" onClick={scrollRight}>
      ▶
    </button>
      </div>

    {/* About Us Section */}
<div className="container-fluid about-us-section mt-5 p-4">
  <h3><u>About Us — SpiceHub:-</u></h3>
  <p>
    Welcome to SpiceHub, where flavor meets tradition.  
    We are more than just a spice brand — we are passionate curators of authentic taste, 
    committed to bringing the world's finest spices from farm to your kitchen.
    Founded with a love for bold flavors and natural ingredients, SpiceHub began as a small idea: 
    to make high-quality, ethically sourced spices accessible to every home cook, chef, and food lover.  
    Today, we proudly serve a community that shares our love for taste that tells a story.
    <br/>
   What We Believe In
   <br/></p>
    <ul>
        <li><b>Purity & Quality:</b> Our spices are handpicked, sun-dried, and ground to perfection — with no additives or fillers.</li>
        <li><b>Sustainability:</b> We work directly with farmers and cooperatives to ensure fair trade and sustainable sourcing.</li>
        <li><b>Freshness Guaranteed:</b> From harvest to your plate, we preserve the natural aroma and richness of every spice.</li>
    </ul>
    <p>
    Whether you're spicing up a weekday dinner or creating a culinary masterpiece, our spices bring out the best in your food.  
    We believe that great flavor should be honest, vibrant, and unforgettable — just like the stories shared over a good meal.
    </p>
</div>
         <div className="homeSlider">
            <div class="container text-center">
            <h2 class="titleH2">what our customer say</h2>
          <Slider {...sliderSettings}>
            {customerreviews.map((b, i) => (
              <div key={i} className="eachpara">
                <p>{b.para}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
</div>

  );
}

export default Shopping;
