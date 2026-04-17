import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import HotTopics from '../components/HotTopics';
import About from '../components/About';
import Insights from '../components/Insights';

const Home = () => {
  return (
    <div className="font-sans">
      <NavBar />
          <Hero />
          <HotTopics></HotTopics>
          <About></About>
          <Insights></Insights>
      {/* <Stats />
      <About />
      <Insights />
      <Footer />  */}
    </div>
  );
}

export default Home
