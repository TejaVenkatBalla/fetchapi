
import MyComponent from './components/fet';
import './App.css'
// import Navbar from './components/nav';
import Translation2 from './components/Translate2';
import BasicExample from './components/nav2';







function App() {
  return (
    <div className='App'>

      <BasicExample/>
      
      <h1>Welcome </h1>
      <p>Here you can get the email of user by entering his name below.</p>
      <p>End point :https://jsonplaceholder.typicode.com/users</p>
      
      <MyComponent />
      <Translation2 />
    </div>
  );
}

export default App;
