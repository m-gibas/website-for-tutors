import { useParams } from "react-router"
import { TutorsProps } from "../Tutors/Tutors"
import { Link } from "react-router-dom";
import './AboutTutor.css'
import GoBackButton from "../GoBackButton";

const AboutTutor = ({ tutors }: TutorsProps) => {
    const params = useParams();
    const tutor = tutors.find(({ id }) => id === parseInt(params.id ? params.id : "") )

  return (
    tutor ? 
    <>
      <GoBackButton />
      <div className="about-tutor">
          <img src={`/Images/${tutor.imgPath}`} alt="person"></img>
          <p>{`${tutor.name} ${tutor.surname}`}</p>
          <span>{tutor.short_desc}</span>

          <Link to="/tutors" className="link">Tutors Page</Link>
      </div>
    </>
    : <>
        <p>There is no tutor here with that id!</p>
        <GoBackButton />
    </>

    
  )
}

export default AboutTutor