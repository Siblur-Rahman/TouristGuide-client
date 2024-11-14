import {useNavigate } from 'react-router-dom';


const TourGuideCard = ({ name, experience, specialty }) => {
  const navigate = useNavigate();


  const viewProfile = () => {
    navigate('/tour-guide-profile');
  };

  return (
    <div className="tour-guide-card">
      <h4>{name}</h4>
      <p>Experience: {experience}</p>
      <p>Specialty: {specialty}</p>
      <button onClick={viewProfile}>View Profile</button>
    </div>
  );
};

export default TourGuideCard;
