import GoBackButton from '../GoBackButton/GoBackButton'
import './About.css'

const About = () => {
  return (
    <>
        <GoBackButton />
        <div className='about-container'>
            <p>This page is to help knowledge hungry people find adequate tutors!</p>
        </div>
    </>
  )
}

export default About