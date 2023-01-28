import { Link } from "react-router-dom"
import './GoBackButton.css'
import { useState } from "react";


const GoBackButton = () => {
    const [isShown, setIsShown] = useState(false);

  return (
    <div className="main-page-button-container">
      <Link to="/" className="link-button">
          <div 
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)} 
              className="main-page-button">
                {isShown ? "Go Back" : "Main Page"}
          </div>
          <div className="return-icon"><img src="/Images/arrow-return-left.svg" alt="arrow" /></div>
      </Link>
    </div>
  )
}

export default GoBackButton