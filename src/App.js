import Navbar from './components/nav';
import MyComponent from './components/fet';
import './App.css'



function App() {
  return (
    <div>
      
      <h1>Welcome </h1>
      <p>Here you can get the email of user by entering his name below.</p>
      <p>End point :https://jsonplaceholder.typicode.com/users</p>
      <Navbar />
      <MyComponent />
    </div>
  );
}

export default App;
