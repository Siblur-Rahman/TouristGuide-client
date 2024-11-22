
import usePublickData from "../../hooks/usePublickData";

import PackageCardForCommunityPage from "./PackageCardForCommunityPage";

import SectionTitle from "../../components/SectionTitle";


const CommutyPage = () => {
    const [publicData]= usePublickData('/packages');
        
      return (
       <div className="flex-col justify-center items-center relative">
            <SectionTitle heading={'Community Page'} subHeading={""}/>
            <div>
                {publicData?.map((pack, index)=><div key={index}>
                    <PackageCardForCommunityPage pack={pack}/>
                </div>)

                }
            </div>
       </div>
      )
};

export default CommutyPage;