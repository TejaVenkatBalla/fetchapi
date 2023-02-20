import React, { useState, useEffect } from 'react';


function MyComponent() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [userDetails, setUserDetails] = useState({ id: '', address: '', username: '', email: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(user => user.name === name);
    setUserDetails({ id: user.id, address: user.address.street + ', ' + user.address.suite + ', ' + user.address.city + ', ' + user.address.zipcode, username: user.username, email: user.email });
  }

  return (
    <div className='Fetch'>
      <h2>Users</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <button type="submit" class="btn btn-primary">Get User Details</button>
      </form>
      <p>ID: {userDetails.id}</p>
      <p>Address: {userDetails.address}</p>
      <p>Username: {userDetails.username}</p>
      <p>Email: {userDetails.email}</p>
    </div>
  );
}

export default MyComponent;
