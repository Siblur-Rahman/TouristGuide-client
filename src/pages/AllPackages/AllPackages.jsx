import { useLoaderData } from "react-router-dom";
import PackageCard from "../Home/GuideSection/PackageCard";
import SectionTitle from './../../components/SectionTitle';
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const AllPackages = () => {
  const axiosPublic = useAxiosPublic()

  const {count} = useLoaderData();
  const [packagesPerPage, setPackagesPerPage] = useState(5);
  const [packages, setPackages] = useState([]);
  const [currentPage, setCurrentPage] = useState()
  const numberOfPages = Math.ceil(count/packagesPerPage);
  const {loading, setLoading} = useAuth()


  const pages = [...Array(numberOfPages).keys()];

  // Data Fetch
  const getData = async() =>{
    const {data} = await axiosPublic(`/packages?page=${currentPage}&size=${packagesPerPage}`);
    setLoading(false);
    setPackages(data);
    return data;
 };
 useEffect(() => {
  getData()
 }, [currentPage, packagesPerPage]);

  const handlePackagesPerpage =(e)=>{
    const val = parseInt(e.target.value);
    setPackagesPerPage(val);
    setCurrentPage(0)
  }

  const handlePrevPage = () =>{
    if(currentPage > 0){
      setCurrentPage(currentPage -1)
    }
  }
  const handleNextPage = () =>{
    if(currentPage < pages.length -1){
      setCurrentPage(currentPage + 1)
    }
  }

    return (
        <div className="">
          <SectionTitle heading={'All Package'}/>
            <div className="lg:flex flex-wrap gap-2">
              {packages?.map((pack, index) => <div key={index} className='lg:w-[32%] md:w-full sm:w-full mb-5'>
                <hr className="w-full border-2 border-[#00bba6] my-6" />
              <PackageCard
                pack={pack} 
              />
              </div>)}
            </div>
            {/* Pagination */}
            <div className="my-2 text-center bgColor1 te">
          <button onClick={handlePrevPage}>Prev</button>
          {
            pages.map(page => <button onClick={() => setCurrentPage(page)} className={`mr-4 btn ${currentPage === page && 'bg-yellow-400'}`} key={page}
            >{page+1}</button>)
          }
          <button onClick={handleNextPage}>Next</button>
          <select name="" id="" value={packagesPerPage} onChange={handlePackagesPerpage}>
                <option value="5">5</option>
                <option value="10">10</option>
          </select>
            
        </div>
        </div>
    );
};

export default AllPackages;