import { Link } from "react-router-dom"
import Tutor from "../Tutor/Tutor"
import './Tutors.css'
import GoBackButton from "../GoBackButton"

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
    <>
    <GoBackButton />
    <div className="tutors-container">
      <h3>Our tutors!</h3>
        <div className="tutors">
          {tutors.map( (tutor) => ( 
            <Link key={tutor.id} to={`/tutor/${tutor.id}`} className="tutor-link">
                <Tutor key={tutor.id} tutor={tutor} />
              </Link>
            ))}
        </div>
    </div>
  </>
  )
}

export default Tutors