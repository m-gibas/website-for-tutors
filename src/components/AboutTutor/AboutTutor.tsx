import { useLocation, useParams } from "react-router"
import { TutorsProps } from "../Tutors/Tutors"
import { Link } from "react-router-dom";
import './AboutTutor.css'

const AboutTutor = ({ tutors }: TutorsProps) => {
    const location = useLocation()

    
    const params = useParams();
    console.log(params.id);
    
    const tutor = tutors.find(({ id }) => id === parseInt(params.id ? params.id : "") )
    console.log(tutor);


  return (
    tutor ? 
    <div className="about-tutor">
        <h2>{location.pathname}</h2>
        <img src={`/Images/${tutor.imgPath}`} alt="person"></img>
        <p>{`${tutor.name} ${tutor.surname}`}</p>
        <span>{tutor.short_desc}</span>
        {/* <h2>{tutor.id} {tutor.name}</h2> */}

        <Link to="/tutors" className="link">Tutors Page</Link>
        <Link to="/" className="link">Main Page</Link>

    </div>
    : <>
        <p>There is no tutor here with that id!</p>
        <Link to="/" className="link">Main Page</Link>
    </>

    
  )
}

export default AboutTutor