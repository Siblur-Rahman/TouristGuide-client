import usePublickData from "../../hooks/usePublickData";
import PackageCard from "../Home/GuideSection/PackageCard";
import SectionTitle from './../../components/SectionTitle';


const AllPackages = () => {
  const [publicData] = usePublickData('/packages')
    return (
        <div className="">
          <SectionTitle heading={'All Package'}/>
            <div className="lg:flex flex-wrap gap-2">
              {publicData?.map((pack, index) => <div key={index} className='lg:w-[32%] md:w-full sm:w-full mb-5'>
                <hr className="w-full border-2 border-[#00bba6] my-6" />
              <PackageCard
                pack={pack} 
              />
              </div>)}
            </div>
        </div>
    );
};

export default AllPackages;