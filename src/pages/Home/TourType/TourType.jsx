import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../../../components/SectionTitle";
import { Link, useNavigate } from "react-router-dom";

const TourType = () => {
    const navigate = useNavigate()
    const viewType = (type) => {
        navigate(`/packageType/${type}`);
      };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <div className=" py-10">
            <div className=""><SectionTitle heading={'Tour Type'}/></div>
            <div className="my-20 w-[90%] m-auto">
            <Slider {...settings}>
                {data?.map((d, index)=>(
                    <Link key={index} onClick={()=>viewType(d?.type)}>
                    <div className="h-[350px]">
                            <div className="flex justify-center items-center rounded-t-xl relative">
                                <img src={d?.img} className="h-[275px] top-0 rounded-xl w-full" alt="" />    
                                <div className="flex flex-col justify-center items-center gap-4 px-4 py-1 absolute bottom-0 bg-white textColor2 rounded-xl text-3xl font-bold">
                                    <p>{d?.type}</p>
                                </div>
                            </div>
                    </div>
                    </Link>
                ))}    
        </Slider>
            </div>
        </div>
    );
};

const data=[
    {
        type:'Adventure',
        img:'https://i.ibb.co.com/bz0MB63/Adventure1.jpg',
    },
    {
        type:'Cultural',
        img:'https://i.ibb.co.com/2s0p5qT/Cultural1.jpg',
    },
    {
        type:'Beach',
        img:'https://i.ibb.co.com/Lpk3HPs/beach1.jpg',
    },
    {
        type:'wildlife',
        img:'https://i.ibb.co.com/2jWL6PQ/Wildlif1.jpg',
    },
]
export default TourType;