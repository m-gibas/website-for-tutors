import { useLocation } from "react-router"

const AboutTutor = () => {
    const location = useLocation()

  return (
    <div>
        <h2>{location.pathname}</h2>
    </div>
  )
}

export default AboutTutor