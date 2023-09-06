function SignInOtherOptions() {
  return (
    <div className="signin-other-options-container">
      <div className="signin-other-options-text">
        Other sign in options
        </div>
      <div className="signin-other-options-btn-container">
        <button className="signin-logo-btn">
          <img src="google-logo.svg" />
        </button>
        <button className="signin-logo-btn">
          <img src="microsoft-logo.svg" />
        </button>
      </div>
    </div>
  );
}

export default SignInOtherOptions;