import SignupForm from "../components/Signup/SignupForm";
import SignupTitle from "../components/Signup/SignupTitle";
import SignInOtherOptions from "../components/Signup/SignInOtherOptions";
import SignupHint from "../components/Signup/SignupHint";

function SignUp() {
  return (
    <div className="signup-page-container">
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
