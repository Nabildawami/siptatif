import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
