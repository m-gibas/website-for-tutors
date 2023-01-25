import { Link } from "react-router-dom"
import Tutor from "../Tutor/Tutor"
import './Tutors.css'

export interface TutorsProps {
  tutors: {
    id: number
    imgPath: string
  }[]
}

const Tutors = ({ tutors }: TutorsProps) => {
  return (
    <div className="register-container">
      <h3>Our tutors!</h3>
        <div className="tutors">
          {tutors.map( (tutor) => ( 
            <Tutor key={tutor.id} tutor={tutor} />
            ))}
        </div>
      <Link to="/" className="link">Main Page</Link>
    </div>
  )
}

export default Tutors