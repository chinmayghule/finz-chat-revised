import { useState } from "react";

function SignupForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <section className="signup-form-inputgroup">
        <label className="signup-label">Email</label>
        <div className="input-with-element">
          <input
            className="signup-input"
            type="email"
            name="signup-email"
            id="signup-email"
            placeholder="example@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </section>

      <section className="signup-form-inputgroup">
        <label className="signup-label">Create a password</label>
        <div className="input-with-element">
          <input
            className="signup-input"
            type={(showPassword) ? 'text' : 'password'}
            name="signup-password"
            id="signup-password"
            placeholder="must be 8 characters"
            minLength={8}
            maxLength={40}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="show-password"
            onClick={() => setShowPassword(prevValue => !prevValue)}
          >
            <img
              src="show-password.svg"
              alt='show password'
            />
          </button>
        </div>
      </section>

      <section className="signup-form-inputgroup">
        <label className="signup-label">Confirm Password</label>
        <div className="input-with-element">
          <input
            type={(showConfirmPassword) ? 'text' : 'password'}
            className="signup-input"
            name="signup-confirm-password"
            id="signup-confirm-password"
            placeholder="repeat password"
            minLength={8}
            maxLength={40}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="show-password"
            onClick={() => setShowConfirmPassword(prevValue => !prevValue)}
          >
            <img
              src="show-password.svg"
              alt='show password'
            />
          </button>
        </div>
      </section>

      <button
        type="submit"
        className="signup-btn"
      >
        Sign up
      </button>
    </form>
  );
}

export default SignupForm;