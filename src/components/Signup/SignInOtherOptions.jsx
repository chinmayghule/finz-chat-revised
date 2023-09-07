function SignInOtherOptions({ isViewportLessThan480 }) {

  if (isViewportLessThan480) {
    return (
      <section className="signin-other-options-container">
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
      </section>
    );
  } else {
    return (
      <div className="signin-other-options-container-large">
        <div className="signin-divider-container">
          <div className="signin-divider"></div>
          <p className="signin-divider-text">or continue with</p>
          <div className="signin-divider"></div>
        </div>

        <div className="signin-options-btn-container-large">
          <button className="signin-options-btn-large">
            <img src="google-logo.svg" />
            <span>Continue with Google</span>
          </button>

          <button className="signin-options-btn-large">
            <img src="microsoft-logo.svg" />
            <span>Continue with Microsoft</span>
          </button>
        </div>
      </div>
    );
  }
}

export default SignInOtherOptions;