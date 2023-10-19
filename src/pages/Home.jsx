import React from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";
import PopularFriend from "../components/PopularFriend";
import BeginnerFriend from "../components/BeginnerFriend";
import PopularArticle from "../components/PopularArticle";
import KategoriBelajar from "../components/KategoriBelajar";
import GrowmatchOffline from "../components/GrowmatchOffline";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Search />
      <PopularFriend />
      <BeginnerFriend />
      <PopularArticle />
      <KategoriBelajar />
      <GrowmatchOffline />
      <Footer />
    </>
  );
};

export default Home;
