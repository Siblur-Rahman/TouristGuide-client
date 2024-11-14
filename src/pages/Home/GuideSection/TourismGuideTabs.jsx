

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PackageCard from './PackageCard';
import TourGuideCard from './TourGuideCard';
import video from './video/video.mp4'

const TourismGuideTabs = () => {
  return (
    <div className="tourism-guide-section">
      <h2>Explore the World with Us</h2>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        <TabPanel>
          <div className="overview-tab">
            <h3>Discover Amazing Destinations</h3>
            <p>Experience unique and unforgettable moments around the globe.</p>
            <video width="100%" className='h-[500px]' controls>
              <source src={`${video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="packages-tab">
            <h3>Our Packages</h3>
            <div className="package-cards">
              <PackageCard 
                image="path/to/image1.jpg" 
                title="Adventure in Bali" 
                type="Adventure" 
                price="$1200" 
              />
              <PackageCard 
                image="path/to/image2.jpg" 
                title="Romantic Paris" 
                type="Romantic" 
                price="$1500" 
              />
              <PackageCard 
                image="path/to/image3.jpg" 
                title="Explore Japan" 
                type="Cultural" 
                price="$1400" 
              />
            </div>
            <button className="all-packages-btn">View All Packages</button>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="tour-guides-tab">
            <h3>Meet Our Expert Tour Guides</h3>
            <div className="tour-guide-cards">
              <TourGuideCard 
                name="John Doe" 
                experience="5 years"
                specialty="Historical Tours" 
              />
              <TourGuideCard 
                name="Jane Smith" 
                experience="3 years" 
                specialty="Adventure Tours" 
              />
              <TourGuideCard 
                name="Ali Hassan" 
                experience="4 years" 
                specialty="Cultural Tours" 
              />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismGuideTabs;
