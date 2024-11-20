import { useParams } from "react-router-dom";
import usePackages from "../../hooks/usePackages";
import PackageCard from "../Home/GuideSection/PackageCard";


const PackageType = () => {
    const [packages] = usePackages();
    const {type} = useParams();
    const samePackage = packages?.filter(f=> f.tourType===type)
    return (
        <div>
            {samePackage?.map((pack, index)=> <div key={index} className="mb-4"><PackageCard pack={pack}/></div>)}
        </div>
    );
};

export default PackageType;