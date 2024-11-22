// import usePublickData from "../../hooks/usePublickData";

import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Comments = ({pack}) => {
    const [comments, setComments]= useState();
    const axiosPublic= useAxiosPublic();
    useEffect(()=>{
        axiosPublic.get(`comments/${pack?._id}`)
        .then(res=>setComments(res.data))
    },[comments])

    return (
        <div className="myBorder p-4">
       {comments?.length >0 &&  <div>
            {
                comments?.map((comment, index)=><div key={index}>
                    <h4 className="text-xl"><span className="textColor2 font-bold">Author</span> : {comment?.author}</h4>
                    <h4 className="text-xl"></h4>
                    <p>{comment?.coment}</p>
                    <hr className="border-2 border-black my-2"/>
                </div>)
            }
        </div>
       }
       {comments?.length ===0 && <div>No Comments Here</div>

       }
        </div>
    );
};

export default Comments;