import React, { useState } from 'react';

export const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Simulate sending the data via a POST request (to a mock endpoint)
    fetch('http://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),  // Send the username and password as JSON
    })
    .then(response => response.json())
    .then(data => console.log('Form submitted:', data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      {submitted ? (
        <p>Submitted! Username: {username}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter your username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
          <br />
          
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <br />
          
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
};
 