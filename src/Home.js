import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="12345"
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller,Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
            image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX679_.jpg"
            price={23.99}
            rating={4}
          />
          <Product
            id="12378"
            title="Amazfit GTS 2 Mini Smart Watch GPS Fitness Tracker for Men Women, Alexa Built-in, 14 Days Battery Life, AMOLED Screen, 5 ATM Waterproof-Black"
            image="https://m.media-amazon.com/images/I/61dHtJrlcOL._AC_SX679_.jpg"
            price={99.99}
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="12945"
            title="Echo (4th Gen) | Spherical design with rich sound, smart home hub, and Alexa | Charcoal"
            image="https://images-na.ssl-images-amazon.com/images/I/61y4J2vTwFL._AC_UL160_SR160,160_.jpg"
            price={59.99}
            rating={4}
          />
          <Product
            id="12305"
            title="Slam Racing Large Game Chair, Suitable for Office or Game Use (Orange)"
            image="https://images-na.ssl-images-amazon.com/images/I/61LOaeUVAYL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            price={98.99}
            rating={5}
          />
          <Product
            id="14345"
            title="LONGLU VR Headset Compatible for iPhone and Android Phone"
            image="https://m.media-amazon.com/images/I/41zNHlpTa3L.jpg"
            price={29.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="22345"
            title="SAMSUNG 32 Odyssey Neo G8 4K UHD 240Hz 1ms G-Sync 1000R Curved Gaming Monitor, Quantum HDR2000, AMD FreeSync Premium Pro, Matte Display, Ultrawide Game View, DisplayPort, HDMI, Black & White, 2022"
            image="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_SX679_.jpg"
            price={1299.99}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
