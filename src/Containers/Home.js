import React from "react";
import IndexContextProvider from "../Context/IndexContext";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Index from "../Components/SuraIndex/Index";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="container-home">
      <IndexContextProvider>
        <Header />
        <Banner />
        <Index />
        <Footer />
      </IndexContextProvider>
    </div>
  );
};

export default Home;
