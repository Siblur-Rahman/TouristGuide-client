

import img from '../../../assets/images/Banner/banner.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PackageCard from './PackageCard';
import TourGuideCard from './TourGuideCard';
import video from './video/video.mp4'
import SectionTitle from '../../../components/SectionTitle';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useGuides from '../../../hooks/useGuides';

const TourismGuideTabs = () => {
  const [guides]= useGuides()
  const [package3, setPackage3]= useState([])
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  useEffect(()=>{
      axiosPublic.get('/packages3')
      .then(res=>setPackage3(res.data))
  },[])
  const allPack=()=>{
    navigate('/allpack')
  }
  return (
    <div className="tourism-guide-section">
      <SectionTitle heading={<>Explore the World with Us <span className='text-[#00BBA6]'></span> Packages</>}/>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        <TabPanel>
          <div className="overview-tab" >
            <h3>Discover Amazing Destinations</h3>
            <p>Experience unique and unforgettable moments around the globe.</p>
            <div className=''>
              <video width="100%" className='h-[500px]' controls>
                <source src={`${video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="packages-tab">
            <SectionTitle heading={'Our Packages'}/>
            <div className="package-cards lg:flex">
              {package3?.map((pack, index) => 
              <div key={index} className='lg:w-[30%] md:w-full sm:w-full mx-auto'>
                  <PackageCard pack={pack}/>
              </div>
            )}
            </div>
            <button className="btn btn-accent w-full text-xl my-5" onClick={allPack}>View All Packages</button>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="">
            <SectionTitle heading={'Meet Our Expert Tour Guides'}/>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
    {/* index */}
          </label>
        </th>
        <th>Name</th>
        <th>Rating</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
            {/* <div className="lg:flex flex-wrap max-w-6xl"> */}
              {guides?.map((guide, index)=> 
                <TourGuideCard key={index} index={index} guide={guide} />
                )}
            {/* </div> */}
            </tbody>
   
   </table>
 </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismGuideTabs;
