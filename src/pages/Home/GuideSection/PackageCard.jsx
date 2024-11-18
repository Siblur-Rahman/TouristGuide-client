import {useLocation, useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useUser from '../../../hooks/useUser';

const PackageCard = ({pack}) => {
  const {user} = useAuth();
  const userinfo = useUser()
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  let location = useLocation();
  const {_id, packageType, tripTitle, price, tourInformation, tourPlan } = pack

  const handleWishlist = () =>{
    if(user && user.email){
      // send cart item to the database
      const wishPackage = {
        packageId: pack?._id,
        email:user.email,
        packageType:packageType,
        tripTitle:tripTitle,
        price:price
      }

        axiosSecure.post('/wishPackage', wishPackage)
        .then(res =>{
          console.log(res.data)

          if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${packageType} Added to Wishlist Successfully`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch()
        }
      })
    }else{

      Swal.fire({
        title: "You are not logged in",
        text: "Plese login to add to the Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(result)
          // send the user to the login page
          navigate("/login", { state: { from: location }});
        }
      })
      .catch(err=>{
        console.log(err)
      })
          // showing sweetalert Conditionaly End
    }
  }

  const viewPackage = (id) => {
    navigate(`/package-details/${id}`);
  };

  return (
    <div className="package-card md:w-[90%] mx-auto sm:w-[90%]">
      <div className="package-details flex-col justify-center items-center">
        <div className='package-image relative'>
        <img src={pack.image || 'https://img.freepik.com/premium-vector/travel-social-media-post-template-travel-holiday-vacation-social-media-post-banner-square-flyer_1104745-354.jpg?w=740'} className='h-[200px]' alt={packageType} />
        <FaHeart onClick={handleWishlist} className={`wishlist-icon ${(userinfo?.role==='admin' || userinfo?.role ==='tourguide') && 'hidden'}`} />
        </div>
        <h4>{packageType}</h4>
        <h4>{tripTitle}</h4>
        <h4>{price}</h4>
        <button onClick={()=>viewPackage(_id)}>View Package</button>
      </div>
    </div>
  );
};

export default PackageCard;
