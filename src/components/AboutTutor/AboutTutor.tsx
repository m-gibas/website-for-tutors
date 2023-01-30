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
          <div className="about-tutor-details">
            <p>{`${tutor.name} ${tutor.surname}`}</p>
            <img src={`/Images/${tutor.imgPath}`} alt="person"></img>
            <span>{tutor.short_desc}</span> <br />
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto eveniet culpa quas accusamus facilis, nam perferendis voluptatum ex aperiam harum animi veritatis. Vel quo accusantium architecto perspiciatis ducimus ad aliquid porro aut, deserunt delectus illum dolore, eum laudantium maiores ea! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta officia molestias perspiciatis ea fugiat quisquam illum aut, commodi saepe, et unde eius, cum eos id quae optio inventore rem sunt mollitia molestiae perferendis quis. Praesentium tempora temporibus repudiandae inventore, consequatur quod delectus magni, maiores vel ex obcaecati reprehenderit architecto dolorem ratione illum nemo! Delectus, ad beatae recusandae itaque facere est sed vel minus, accusamus aut quam error ullam velit explicabo magni enim in dicta ab quaerat cupiditate ipsa nesciunt id voluptatem dolores? Dolore cumque sapiente amet reprehenderit odit, eum quo, voluptates repudiandae labore impedit dolor veritatis nihil dolorum adipisci?</span>
          </div>
          <div className="back-to-tutors-button">
            <Link to="/tutors" className="link">Tutors Page</Link>
          </div>
        </div>

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