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
        <div className="about-tutor-card">
          <div className='about-tutor-img'>
              <img src={`/Images/${tutor.imgPath}`} alt="person"></img>
          </div>
          <div className="about-tutor-details">
            <p>{`${tutor.name} ${tutor.surname}`}</p>
            <span>{tutor.short_desc}</span> <br />
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto eveniet culpa quas accusamus facilis, nam perferendis voluptatum ex aperiam harum animi veritatis. Vel quo accusantium architecto perspiciatis ducimus ad aliquid porro aut, deserunt delectus illum dolore, eum laudantium maiores ea!</span>
          </div>
        </div>

          <Link to="/tutors" className="link">Tutors Page</Link>
      </div>
    </>
    : <>
        <GoBackButton />
        <div className="tutors-container">
          <h3>There is no tutor here with that id!</h3>
        </div>
    </>

    
  )
}

export default AboutTutor