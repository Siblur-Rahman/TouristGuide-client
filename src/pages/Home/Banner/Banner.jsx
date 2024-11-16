import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import banner from '../../../assets/images/Banner/banner.png'
import banner2 from '../../../assets/images/Banner/banner2.png'
import banner3 from '../../../assets/images/Banner/banner3.png'

const Banner = () => {
  const images = [
    {
      image:`${banner}`,
      country_Name:'Indonesia'
    },
    {
      image:`${banner2}`,
      country_Name:'Australia'
    },
    {
      image:`${banner3}`,
      country_Name:'Switzerland'
    }
  ]
  return (
    <div className="py-10 hover:opacity-40 relative">
      <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
            {
                images.map(spot => <SwiperSlide key={spot.id} className="">
                  <img src={spot.image} className="rounded-box w-full h-[500px]" />
                  <div className="absolute left-[30%] top-[50%] text-6xl text-center left- font-bold text-red-600 z-10 p-2 rounded-2xl">
                    <div>
                    {spot.country_Name}
                    </div>
                    <hr />
                    <div className="text-white ">
                    {spot.tourists_spot_name}
                    </div>
                  </div>
                  </SwiperSlide>)
            }
  </Swiper>
    </div>
        
  );
};

export default Banner;