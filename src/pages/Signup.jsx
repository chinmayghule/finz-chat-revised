import SignupForm from "../components/Signup/SignupForm";
import SignupTitle from "../components/Signup/SignupTitle";
import SignInOtherOptions from "../components/Signup/SignInOtherOptions";
import SignupHint from "../components/Signup/SignupHint";
import { useContext } from "react";
import Theme from "../contexts/Theme";


function SignUp() {
  const {
    isDarkThemeEnabled,
    setIsDarkThemeEnabled,
    isViewportLessThan480
  } = useContext(Theme);


  if (isViewportLessThan480) {
    return (
      <div className='signup-page-container'>
        <div className="signup-wrapper">
          <SignupTitle />
          <SignupForm />
          <SignInOtherOptions
            isViewportLessThan480={isViewportLessThan480}
          />
          <SignupHint
            isViewportLessThan480={isViewportLessThan480}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className='signup-page-container'>
        <div className="signup-wrapper">
          <SignupTitle />
          <SignupForm />
          <SignupHint
            isViewportLessThan480={isViewportLessThan480}
          />
          <SignInOtherOptions
            isViewportLessThan480={isViewportLessThan480}
          />
        </div>
      </div>
    );
  }
};

export default SignUp;
