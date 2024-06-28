import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Forgot() {
  const navigate = useNavigate();
  
  const [username, setUserName] = useState('');
  const [crpassword, setCreatePassword] = useState('');
  const [copassword, setConfirmPassword] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  function handleUsername(e) {
    setUserName(e.target.value);
  }

  function handleCreatePassword(e) {
    setCreatePassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  async function handleRegister(e) {
    e.preventDefault();
    if (crpassword !== copassword) {
      setError('Please enter the correct password.');
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/forgot", {
        username,
        crpassword
      });
      if (response.status === 200) {
        setResult('Password updated successfully. You can now login.');
        setError('');
      }
    } catch (error) {
      setError('User not found');
      setResult('');
    }
  }

  return (
    <div className="register">
      <h1>Forgot Password</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsername}
        />
        <br /><br />
        <label htmlFor="createPassword">Create Password</label>
        <br />
        <input
          type="password"
          name="createPassword"
          placeholder="Create Password"
          value={crpassword}
          onChange={handleCreatePassword}
        />
        <br /><br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={copassword}
          onChange={handleConfirmPassword}
        />
        <br /><br />
        <button type="submit">Submit</button>
        <br /><br />
        <button type="button" onClick={() => navigate('/login')}>Go to Login</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result && <div>{result}</div>}
    </div>
  );
}

export default Forgot;
