import React from "react";
import Banner from "../components/Banner";
import HotJobs from "./HotJobs";
import HotCard from "./HotCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      <HotJobs />
    </div>
  );
};

export default Home;
