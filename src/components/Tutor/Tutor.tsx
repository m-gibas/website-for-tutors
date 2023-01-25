import './Tutor.css'

export interface TutorProps {
    tutor: {
        id: number
        name: string
        surname: string
        imgPath: string
        short_desc: string
    }
}

const Tutor = ({ tutor }: TutorProps) => {
  return (
    <div className="tutor-card">
        <div className='tutor-img'>
            <img src={`./Images/${tutor.imgPath}`} alt="person"></img>
        </div>
        <div className='tutor-details'>
            <div >
            <p>{`${tutor.name} ${tutor.surname}`}</p>
            </div>
            <span>{tutor.short_desc}</span>
        </div>
    </div>
  )
}

export default Tutor