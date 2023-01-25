import { Link } from "react-router-dom"
import Tutor from "../Tutor/Tutor"
import './Tutors.css'

export interface TutorsProps {
  tutors: {
    id: number
    name: string
    surname: string
    imgPath: string
    short_desc: string
  }[]
}

const Tutors = ({ tutors }: TutorsProps) => {
  return (
    <div className="register-container">
      <h3>Our tutors!</h3>
        <div className="tutors">
          {tutors.map( (tutor) => ( 
              <Link key={tutor.id} to={`/tutor/${tutor.id}`} className="tutor-link">
                <Tutor key={tutor.id} tutor={tutor} />
              </Link>
            ))}
        </div>
      <Link to="/" className="link">Main Page</Link>
    </div>
  )
}

export default Tutors