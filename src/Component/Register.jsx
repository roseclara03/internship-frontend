import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios  from "axios";

function Regis() {
  const navigate=useNavigate();
  
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  function handleUsername(e) {
    setUserName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  function handleError() {
    if (password !== confirmPassword) {
      setError("Make sure password and confirm password are the same.");
      setResult(false);
      return true;
      
    }
    setError(false);
    return false;
  }

  function handleRegister(e) {
    e.preventDefault();
    if (!handleError()) {
      setResult(`Your name is ${username}, your email is ${email}, and you have entered a password.`);
      navigate('/home');
      axios.post("http://localhost:5000/register",{
        username,
        email,
        password
      })

     
    }
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          value={username}
          onChange={handleUsername}
        />
        <br /><br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          value={email}
          onChange={handleEmail}
        />
        <br /><br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <br /><br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm your password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        <br /><br />
        <button>Register</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result && <div>{result}</div>}
    </div>
  );
}

export default Regis;
