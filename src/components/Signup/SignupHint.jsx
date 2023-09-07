function SignupHint({ isViewportLessThan480 }) {
  return (
    <p
      className={(isViewportLessThan480) ? "signup-hint" : "signup-hint-large"}
    >
      Already have an account? <a className="signup-hint-link" href="#" alt='Go to log in'>Log in</a>
    </p>
  );
}

export default SignupHint;