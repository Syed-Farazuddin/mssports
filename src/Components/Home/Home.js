import React, { useState } from "react";
import "../common/common.css";
import goodOne from "../../assets/goodone.jpg";
import chairOne from "../../assets/chair1.jpg";
import chairTwo from "../../assets/chair2.jpg";
import chairThree from "../../assets/chair3.jpg";
import interior5 from "../../assets//interior5.jpg";
import logo from "../../assets/logo.jpg";
import video from "../../assets/video1.mp4";
<script
  src="https://kit.fontawesome.com/34e52d2b48.js"
  crossorigin="anonymous"
></script>;

const Home = () => {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <section>
        <div className="page">
          <header className="header">
            <nav className="flexbox" id="nav_bar">
              <div className="logo">
                <img alt="img" src={logo} width={150} height={150} />
                <h3 className="logo_text">MS SPORTS</h3>
                {/* <h1>MS SPORTS</h1> */}
              </div>
              <div className="responsive_nav_bar">
                <a
                  href="#menu"
                  id="menu-bar"
                  onClick={() => {
                    setMenu(!menu);
                    console.log("The menu bar is clicked");
                    document
                      .getElementById("nav_items")
                      .classList.toggle("pop_sidebar");
                  }}
                >
                  {menu ? (
                    <i className="fa-solid fa-bars"></i>
                  ) : (
                    <i className="fa-solid fa-xmark"></i>
                  )}
                </a>
                <div className="nav-items flexbox" id="nav_items">
                  <ul>
                    <a href="#designs">
                      <li>Top Designs</li>
                    </a>
                    <a href="#aboutUs">
                      <li>About us</li>
                    </a>
                    <a href="#contact">
                      <li>Contact</li>
                    </a>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          {/*............... Section 2 ................ */}

          <div className="section2 flexbox" id="home">
            <div className="Page_title flex1">
              <h1 className="h1">
                Crafted for Performance, Designed for Champions
              </h1>
            </div>
            <div className="page_image">
              <img alt="img" src={goodOne} />
            </div>
          </div>
        </div>

        {/* ....................Section 3 ................ */}

        <div className="section3" id="aboutUs">
          <div className="info">
            <h1 className="heading">Crafted With Excellent Material</h1>
            <p>Experience the Perfect Swing Every Time</p>
            <p>Where Quality Meets Affordability</p>
            <p>Pure Kashmir Willow Bats, Light Weight and Well Balanced</p>
            <p>All over India 🇮🇳 delivery 🌏</p>
          </div>
          <div className="images">
            <img alt="" src={chairOne} />
            <img alt="" src={chairThree} />
            <img alt="" src={chairTwo} />
          </div>
        </div>
      </section>
      {/*............ Testinomials section............ */}
      <section id="testimonials">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <h1 className="Why">Why Choose Us ?</h1>

            {/* <!-- First Testimonial -->*/}
            <div className="carousel-item active">
              <h2>
                Easy To Shop and Contact.We are always there to support and
                reach you as soon as possible
              </h2>
              <em></em>
            </div>
            {/* <!-- Second Testimonial --> */}
            <div className="carousel-item">
              <h2 className="testimonial-text">
                24/7 support.The staff of MS Sports are available at any time
                you want to reach
              </h2>
              <em></em>
            </div>

            <div className="carousel-item">
              <h2 className="testimonial-text">
                Best Quality Products. The products of MS Sports are made by
                choosing the material carefully and you can customize your bats
                as you will.
              </h2>
              <em></em>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section>
        <div className="customize">
          <h1 className="custom">Customize Your Bats </h1>
          <video width="320" height="240" controls>
            <source src={video} type="video/mp4" />
            {/* <source src="video1.mp4" type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      {/* .......Section 4 ............. */}
      <section id="section4">
        <div className="interior_design">
          <div className="photo">
            <div>
              <img className="photos interior1" alt="img" src={interior5} />
            </div>
          </div>
        </div>
        <div className="info" id="info2">
          <h1> Crafting Excellence for Every Cricket Enthusiast</h1>
          <p>
            With a commitment to quality and customer satisfaction, we strive to
            empower cricket enthusiasts with equipment that inspires confidence
            and precision on the field. Whether you’re a budding cricketer or a
            seasoned player, our bats are built to help you ace every shot.
          </p>
        </div>
      </section>
      {/* .................. Testinomials for images ............ */}
      {/* <section id="testimonials">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner" id="designs">
            <div className="carousel-item active">
              <h2>Some of the top designs</h2>
              <img
                className="testimonial-image"
                src={background1}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={background2}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={background3}
                alt="sample design"
              />
            </div>
            <div className="carousel-item">
              <h2>Some of the top designs</h2>
              <img
                className="testimonial-image"
                src={hd3}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd4}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd5}
                alt="sample design"
              />
            </div>
            <div className="carousel-item">
              <h2>Some of the top designs</h2>
              <img className="testimonial-image" src={hd} alt="sample design" />
              <img
                className="testimonial-image"
                src={hd2}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd1}
                alt="sample design"
              />
            </div>
            <div className="carousel-item">
              <h2>Some of the top designs</h2>
              <img
                className="testimonial-image"
                src={hd6}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd7}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd8}
                alt="sample design"
              />
            </div>
            <div className="carousel-item">
              <h2>Some of the top designs</h2>
              <img
                className="testimonial-image"
                src={hd9}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd10}
                alt="sample design"
              />
              <img
                className="testimonial-image"
                src={hd11}
                alt="sample design"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
       */}
      <footer id="contact">
        <div className="contact">
          <h1>
            Thank you for contacting MS SPORTS! Please let us know how we can
            help you.
          </h1>
          <div id="social">
            <div className="socials">
              <a
                href="https://instagram.com/mssports1225/profilecard/?igshid=dHRjZDJyM2p1ajF1"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="socials">
              <a href="tel:+918143423272" target="_blank" rel="noreferrer">
                <i className="fa-sharp fa-solid fa-phone"></i>
              </a>
            </div>
            <div className="socials">
              <a
                href="https://wa.me/918143423272"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
