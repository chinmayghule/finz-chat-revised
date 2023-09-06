import SignupForm from "../components/Signup/SignupForm";
import SignupTitle from "../components/Signup/SignupTitle";
import SignInOtherOptions from "../components/Signup/SignInOtherOptions";
import SignupHint from "../components/Signup/SignupHint";
import { useContext } from "react";
import Theme from "../contexts/Theme";


function SignUp() {
  const {
    isDarkThemeEnabled,
    setIsDarkThemeEnabled
  } = useContext(Theme);

  return (
    <div className='signup-page-container'>
      <div className="signup-wrapper">
        <SignupTitle />
        <SignupForm />
        <SignInOtherOptions />
        <SignupHint />
      </div>
    </div>
  );
};

export default SignUp;
