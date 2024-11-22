import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import usePublicData from './../../../hooks/usePublickData';

const ContactInfo = () => {
    const [publicData] = usePublicData('/contacts')
    return (
        <div>
            {publicData?.map((mess, index)=>
                <div key={index} className="myBorder p-4">
                    <div className="lg:w-3/5 mx-auto my-6 flex text-2xl">
                    <span><FaUserAlt/> </span> <span className="ml-2 font-bold text-[#00bba6]">{mess?.name}</span>    
                    </div>       
                    <div className="lg:w-3/5 mx-auto my-6 flex text-2xl">
                        <FaEnvelope className=""/><span className="ml-2 -mt-1.5 font-bold text-[#00bba6]">{mess?.email}</span>    
                    </div>
                    <h4 className="lg:w-3/5 mx-auto my-6"> <span className="textColor2 font-bold">message:</span> {mess?.message}</h4>
                </div>
            )}
        </div>
    );
};

export default ContactInfo;