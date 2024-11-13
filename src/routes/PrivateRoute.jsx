
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(loading)
  if (loading) {
    return (
      <div className="h-screen mx-auto w-full text-center">
        <h2 className="text-xl pt-32 px-16">Loading...</h2>
        <progress className=" progress px-8 w-1/2 bg-slate-300"></progress>
      </div>
    );
  }
  if (user) {
   
    return children;
  }

  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
