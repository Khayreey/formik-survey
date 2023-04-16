import BackgroundImage from "../assets/images/4.jpg";
import RightImage from "../assets/images/1.jpg";
import LeftImage from "../assets/images/2.jpg";
import StepperForm from "./StepperForm";

const LandingPage = () => {
  return (
    <div className="main">
     
      <img src={BackgroundImage} alt="real estate" className="img1" />
      
     
      <StepperForm />
    </div>
  );
};

export default LandingPage;
