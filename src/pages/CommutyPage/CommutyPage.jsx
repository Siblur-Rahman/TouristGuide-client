

import PackageCardForCommunityPage from "./PackageCardForCommunityPage";

import SectionTitle from "../../components/SectionTitle";
import usePublicData from "../../hooks/usePublickData";


const CommutyPage = () => {
    const [publicData]= usePublicData('/packages');
        
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