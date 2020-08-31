import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://lh3.googleusercontent.com/OvlpCuqUct1MjxLe7OvpYgIpd-v9Rjes-eWgAPFA1kNRNwDQX9YymqL3KDLaUbvc3au8FEkflAcIp3ej9TNxK79yaAg08R4CI0Sj9U4THbv7Ctw38rxD7I0073x1ikoIFH_MUy0A1Ph2Cl44n0pS-8gcE2N9UVidBA3yZ6CKhHTbp8bpMCAgTgVsrTo7SHrW0xpJacWcMxK8bglnC87AWaqNFczRsHDnPufdp7U6JDtoRowGJeIKl_cNQAFYvc7opuxjWQ84CTuYKuCLmYC3k3FB7m-zPLPfUUFRYxKTXvcNhXXjB7b96jt5PVPQHqEKcuAfLcdsKx0UGPP2UU0myv11CgLu-M36tA2Y2_L2idFpgLk0NTGgIG7eRxtrbxQbmJbG-TEyiiowkCau391pxk-Sro2LvzKi6_0mNEwKE416-71t40XOSUJYPKMoYuLxBD-5vSGRefQDBNryQidt_slTFaC299_94R5oZOonrUIYgdrEoqF0eUREIFKuqKKBw3fJuJ1QLkNqoZar3wGaCPtpr7K4Ny33WQcjeIcMvHhMOEdFwUQsYesVTcxQBLH-2hepyT3HbmMYjHElyHcDrzap9nhQfqCeUliGD6V-xhN9ogf9WabbJfJfwywKS0bNlloF2Wtc04T3dMI9lKxzCX3-1R33YOR4SQNiUvYd7dARRMCckUKdIx_F180rEw=w959-h350-no?authuser=0"
        alt=""
      />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123456"
          title="Sony PlayStation 4 500GB Console (Black)"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61DEI%2BSDg0L._AC_SX679_.jpg"
        />
        <Product
          id="123456"
          title="Sony PlayStation 4 500GB Console (White)"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61DEI%2BSDg0L._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123456"
          title="Sony PlayStation 4 500GB Console (Grey)"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61DEI%2BSDg0L._AC_SX679_.jpg"
        />
        <Product
          id="123456"
          title="Sony PlayStation 4 500GB Console (Blue)"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61DEI%2BSDg0L._AC_SX679_.jpg"
        />
        <Product
          id="123456"
          title="Sony PlayStation 4 500GB Console (Red)"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61DEI%2BSDg0L._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123456"
          title="Sony PlayStation 4 500GB Console (Black)!!!Sony PlayStation 4 500GB Console (Orange)"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61DEI%2BSDg0L._AC_SX679_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
