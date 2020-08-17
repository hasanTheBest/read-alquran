import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Index from "../Components/SuraIndex/Index";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <Banner />
      <Index />
      <Footer />
    </div>
  );
};

export default Home;
