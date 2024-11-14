import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../../../components/SectionTitle";

const TourType = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <div className="bg-[#d8d0d0] py-10">
            <div className=""><SectionTitle heading={'Tour Type'}/></div>
            <div className="my-20 w-3/4 m-auto">
            <Slider {...settings}>
                {data?.map((d, index)=>(
                    <div key={index} className="bg-blue-500 h-[300px] rounded-xl">
                            <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                                <img src={d?.img} className="h-44 w-44 rounded-full" alt="" />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <p>{d?.type}</p>
                                <button>Details</button>
                            </div>
                    </div>
                ))}    
        </Slider>
            </div>
        </div>
    );
};

const data=[
    {
        type:'hiking',
        img:'',
    },
    {
        type:'sport',
        img:'',
    },
    {
        type:'walking',
        img:'',
    },
    {
        type:'wildlife',
        img:'',
    },
    {
        type:'air ride',
        img:'',
    },
]
export default TourType;