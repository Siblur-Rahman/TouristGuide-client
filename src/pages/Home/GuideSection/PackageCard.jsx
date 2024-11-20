import {useLocation, useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const PackageCard = ({pack}) => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  let location = useLocation();
  const {_id, tourType, tripTitle, price, tourInformation, tourPlan } = pack

  const handleWishlist = () =>{
    if(user && user.email){
      // send package item to the database
      const wishPackage = {
        packageId: pack?._id,
        email:user.email,
        tourType:tourType,
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
            title: `${tourType} Added to Wishlist Successfully`,
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
    if(user){
      navigate(`/package-details/${id}`);
    }
    else{
      navigate("/login", { state: { from: location} })
    }
  };

  return (
    <div className="package-card w-full p-4 mb-6">
      <div className="flex-col justify-center items-center w-full">
        <div className='package-image relative w-full'>
        <img src={pack?.images?.image1 || 'https://img.freepik.com/premium-vector/travel-social-media-post-template-travel-holiday-vacation-social-media-post-banner-square-flyer_1104745-354.jpg?w=740'} className='h-[400px]' alt={tourType} />
        <h4 className='absolute top-1 bg-slate-50 m-2 rounded-3xl px-4 py-1 text-xl font-semibold'>${price}</h4>
          <div className='absolute left-2 right-2 bottom-2 bg-slate-200 mx-auto rounded-lg'>
            <h4 className='text-xl pl-2 font-medium'>{tourType}</h4>
            <h4 className='text-lg pl-2 text-emerald-800'>{tripTitle}</h4>
            <h4 className='pl-2'>{tourInformation?.slice(0, 80)}</h4>
            <FaHeart onClick={handleWishlist} title='Add to Wishlist'  className={`wishlist-icon z-50 text-[#00BBA6]`} />
          </div>
        </div>
        <button onClick={()=>viewPackage(_id)} className='btn btn-accent text-sm mt-5 mb-2'>View Package</button>
      </div>
    </div>
  );
};

export default PackageCard;
