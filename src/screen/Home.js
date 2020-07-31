import React from "react";
import "./Home.css";
import Product from "./components/Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/PD2020_50_IN_Prime_GW_Join_prime_BouceBack_1500x600._CB409600924_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123124"
          title="Sunflame GT Pride Glass Top 2 Burner Gas Stove, Manual Ignition, black"
          price={2450}
          rating={3.9}
          image={
            "https://m.media-amazon.com/images/I/81gYFq6KnmL._AC_UY218_.jpg"
          }
        />
        <Product
          id="123123"
          title="Inalsa 60 cm, 1050 m³/hr Pyramid Chimney Classica 60BKBF with SS Baffle Filter/Push Button Control (Black)"
          price={4999}
          rating={3.4}
          image={
            "https://m.media-amazon.com/images/I/51o9cXO6pnL._AC_UY218_.jpg"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id="123135"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey"
          price={239900}
          rating={4.2}
          image={
            "https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
          }
        />
        <Product
          id="123343"
          title="Dell G Series G7  7588 15.6-inch FHD Laptop (8th gen Core i9-8950HK/16GB/1TB + 128GB SSD/Windows 10"
          price={144800}
          rating={4.3}
          image={
            "https://m.media-amazon.com/images/I/61GiBWvgvOL._AC_UY218_.jpg"
          }
        />
        <Product
          id="433343"
          title='ASUS ZenBook Pro Duo UX581GV-H2041T Intel Core i9 9th Gen 15.6" 4K UHD OLED Touchscreen Laptop'
          price={269150}
          rating={4.2}
          image={
            "https://m.media-amazon.com/images/I/91VR2ZXL9LL._AC_UY218_.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Home;
