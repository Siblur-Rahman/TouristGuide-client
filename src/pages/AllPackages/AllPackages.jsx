import usePublickData from "../../hooks/usePublickData";
import PackageCard from "../Home/GuideSection/PackageCard";


const AllPackages = () => {
  const [publicData] = usePublickData('/packages')
    return (
        <div className="">
            <div className="package-cards lg:flex">
              {publicData?.map((pack, index) => <div key={index} className='lg:w-[30%] md:w-full sm:w-full mx-auto'>
              <PackageCard
                pack={pack} 
              />
              </div>)}
            </div>
        </div>
    );
};

export default AllPackages;