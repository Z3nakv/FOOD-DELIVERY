import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import SlideBar from "../../components/SlideBar/SlideBar";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <div style={{position:'relative'}}>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
        <SlideBar />
      </div>
    </>
  );
};

export default Home;
