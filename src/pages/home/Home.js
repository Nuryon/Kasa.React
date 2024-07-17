import React from "react";
import bannerImage from "../../assets/images/banner2.png";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div className="home-container">
      <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />

      <Cards />
    </div>
  );
};

export default Home;
