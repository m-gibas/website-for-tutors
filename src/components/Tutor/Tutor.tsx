import './Tutor.css'

export interface TutorProps {
    tutor: {
        // id: number
        imgPath: string
    }
}

const Tutor = ({ tutor }: TutorProps) => {
  return (
    <div className="tutor">
        <img src={`./Images/${tutor.imgPath}`} alt="obrazek"></img>
    </div>
  )
}

export default Tutor