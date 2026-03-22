import React from 'react';
import Slider from '../components/Slider';
import FeatureTabs from '../components/FeatureTabs/FeatureTabs';
import SubSlider from '../components/SubSlider';
import Footer from '../components/Footer/Footer';
import Socials from '../components/Socials';
import InfoCards from '../components/InfoCards';
import HeroSection from '../components/HeroSection';
import LearnMoreButton from '../components/LearnMoreButton';


export default function Homepage() {
    return (
        <div>
            <div className="relative">
            <Slider />
            <div className="absolute bottom-5 right-5 z-10">
            <Socials />
            </div>
            </div>
            <InfoCards/>
            <HeroSection/>

              <div className="w-full mx-5  flex">
              <div className=" w-[55%] bg-[#244c45] text-white p-8 z-20">
        <h2 className="text-2xl font-semibold mb-4 leading-snug">
          We are a collection of professional that delivers exceptional results
        </h2>

        <p className="text-sm opacity-80 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>

        <button className="border border-white px-4 py-2 text-sm flex items-center gap-2">
          Read More →
        </button>
      </div>
      <div className='flex justify-center items-center w-[45%] bg-blue-200 mr-10'>
        <LearnMoreButton/>
      </div>
              </div>

            <FeatureTabs/>
            <div className="container">

  {/* Background colors */}
  <div className="top-bg"></div>
  <div className="bottom-bg"></div>

  {/* Floating content */}
  <div className="floating-card">
    <div>
        <span className='text-white text-2xl font-extrabold'>Curated Offers For You</span>
    </div>
    <div className='sub-slider'>
        <SubSlider/>
    </div>
  </div>

</div>

            <div className="container mt-5">

  {/* Background colors */}
  <div className="top-bg1"></div>
  <div className="bottom-bg1"></div>

  {/* Floating content */}
  <div className="floating-card">
    <div>
        <span className='text-white text-2xl font-extrabold'>Curated Offers For You</span>
    </div>
    <div className='sub-slider'>
        <SubSlider/>
    </div>
  </div>

</div>
<Footer/>
        </div>
    );
}