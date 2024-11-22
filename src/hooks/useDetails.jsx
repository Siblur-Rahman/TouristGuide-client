import { useNavigate } from "react-router-dom";


const useDetails = () => {
    const navigate = useNavigate()
    const viewDetails = (api) => {
        navigate(api);
      };
    return [viewDetails];
};

export default useDetails;