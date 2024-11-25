import {useNavigate } from 'react-router-dom';


const TourGuideCard = ({guide, index}) => {
  const { name, image, experience_years, specialties, languages, contact } = guide;
  const navigate = useNavigate();


  const viewDetails = () => {
    navigate(`/guideDetails/${contact?.email}`);
  };

  return (

      <tr>
        <th>
          <label>
            {index+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Guide Image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{languages}</div>
            </div>
          </div>
        </td>
        <th>
          <button onClick={viewDetails} className="mybtn">details</button>
        </th>
      </tr>
  );
};

export default TourGuideCard;
