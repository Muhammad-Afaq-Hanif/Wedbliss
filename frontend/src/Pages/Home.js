import { useEffect } from "react";
import Hero from "../Components/Home/Hero";
import Search from "../Components/Home/Search";

import HowItWorks from "../Components/Home/HowItWorks";
import FindTheTalent from "../Components/Home/FindTheTalent";
import ExploreTheMarket from "../Components/Home/ExploreTheMarket";
import TopServices from "../Components/Home/TopServices/TopServices";
import BaseServiceProvider from "../Providers/Services/BaseService/BaseServiceProvider";
const Home = function () {
  return (
    <div>
      <Hero />
      <Search />
      <ExploreTheMarket />
      <HowItWorks />
      <BaseServiceProvider>
        <TopServices />
      </BaseServiceProvider>
      <FindTheTalent />
    </div>
  );
};

export default Home;
