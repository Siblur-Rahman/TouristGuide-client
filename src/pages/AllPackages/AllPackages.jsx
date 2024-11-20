import usePackages from "../../hooks/usePackages";
import PackageCard from "../Home/GuideSection/PackageCard";


const AllPackages = () => {
  const [packages] = usePackages();
    return (
        <div className="">
            <div className="package-cards lg:flex">
              {packages?.map((pack, index) => <div key={index} className='lg:w-[30%] md:w-full sm:w-full mx-auto'>
              <PackageCard
                pack={pack} 
              />
              </div>)}
            </div>
        </div>
    );
};

export default AllPackages;