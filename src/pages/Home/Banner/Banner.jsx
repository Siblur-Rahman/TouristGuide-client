import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  const images = [
    {
      image:`https://img.freepik.com/free-photo/green-lake_1136-145.jpg?uid=R149982094&ga=GA1.1.1129426385.1730786029&semt=ais_hybrid`,
      country_Name:'Bangladesh'
    },
    {
      image:`https://img.freepik.com/premium-photo/scenic-view-sea-against-sky_1048944-14143995.jpg?w=740`,
      country_Name:'Thailand'
    }
  ]
  return (
    <div className="py-10">
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
                                              <div className="absolute text-3xl text-center font-bold text-red-600 z-10 top-1/2 left-1/2 bg-gray-300 p-2 rounded-2xl">
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