import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchData();
  }, []);
//api fetching
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(user => user.name === name);
    setEmail(user.email);
  }

  return (
    <div>
      <h2>Users</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <button type="submit">Get Email</button>
      </form>
      <p>Email: {email}</p>
    </div>
  );
}

export default MyComponent;
