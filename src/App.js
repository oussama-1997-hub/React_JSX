import logo from './logo.svg';
import './App.css';
import imag from'./Nature.jpg';
import Mynavbar from './NavBar'


function App() {
var name="Oussama";
var age="25";
  return (
    <div className="App">
      <Mynavbar />
      <h1> Hello, my name is {name} and my age is {age} </h1>
      <img src={imag} class="img-horse" alt="IMG" style={{borderRadius: 40}}></img>
    </div>
  );
}

export default App;
