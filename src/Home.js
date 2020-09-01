import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://lh3.googleusercontent.com/-0QiRZ9G5w2zO5gn3noQdCctKB9efGZWeEMpRpVUkvvCDhYt9liBJi9vLWC4DjB4BJfvLaXFmvg35bxKbg5AqcEsI5Sc8VA6xduyKqOZiFSm8PNV6GWoq3FZJjwyGZnSd20I_jSpnSBdRt-4oVWCP7_wX9Dis7-ZAMHbtt5Q5z4GcZM0G8WO3-_lBWuJwAw-objNSnt6L6o46ZAcTw8sqDpl5ZdGpjTcA06rBAi2AgDExNPh2pTh76LbW6sQiPNsx-cDNo5iTYcg-3toooJq6OJTbSNOy7qmowXAQTSrrBEInhLfPX6wVzhS-oCDfVy0REWNghVxjGO6vjug74-X7v94SNTVqM5hyi_sL31FQxblLLdeZuNWSW-MldQO0j2xdA1QKMK8yOEBO-qkN8dIe_UQzuHOjx2TiZx_QtDTyhjEJxMFGcO2qlEOHayZ75ZBJVDcNeHQGb1a66LDJyHd4kX_QVPs_EFmu_W-K590I13PZszPIwZutTwjOI8yLLHmmEtoAT5TzhBIVB0RqalZ0TT3baGp_Zg4P4oR2puJc5AfODcybmloYcuY7Ld58L86TDcMDHyKrNcEQZ7Xzw5RYf-1xqnutLOTJ_Sv55zcwrVSNd81NxySm9xVZKismkDS-OZqa_k29TYlFozokbcbvWN55snW9HejET9hzzJVTKAZZHZ-p-miyXMl9baJFA=w732-h275-no?authuser=0"
        alt=""
      />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="3"
          title="Sony PlayStation 4 1TB Slim Console (Black) - International Version"
          price={1122.51}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51mS5FhRwRL._AC_SL1002_.jpg"
        />
        <Product
          id="4"
          title="Sony PS4 Pro 1TB Console (Black) - International Version"
          price={1396.9}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61MpH3dYANL._AC_SL1156_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="5"
          title="DASEEN GAMING PC CPU ,RTX2080SDD/RAM 8G,16G"
          price={2580.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71JlGAoc-KL._AC_SL1500_.jpg"
        />
        <Product
          id="6"
          title="Spider-Man 2019 Game of The Year Edition (PS4)"
          price={65.33}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81UCgfdbNNL._AC_SL1500_.jpg"
        />
        <Product
          id="7"
          title="Sony PlayStation 4 500GB Console (Red)"
          price={1196}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61DEI%2BSDg0L._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="8"
          title="Samsung 49RU7100 49 Inch Flat Smart 4K UHD TV Series 7 (2019) Black"
          price={7596}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91EHdo7M0rL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="9"
          title="
          Letsfit Smart Watch, Fitness Tracker with Heart Rate Monitor, Activity Tracker with 1.3"
          price={112.51}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/61MNpaOq6GL._AC_SL1500_.jpg"
        />
        <Product
          id="10"
          title="Razer Blade 15 Base Gaming Laptop 2020: Intel Core i7-10750H 6-Core"
          price={4396.9}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71r5254QPZL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="11"
          title="Sony PlayStation 4 1TB Slim Console (Black) - International Version"
          price={1122.51}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51mS5FhRwRL._AC_SL1002_.jpg"
        />
        <Product
          id="12"
          title="Sony PS4 Pro 1TB Console (Black) - International Version"
          price={1396.9}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61MpH3dYANL._AC_SL1156_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
