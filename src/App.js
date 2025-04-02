import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './Components/Weather'; 

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 text-success fst-italic animated-border">
          My Weather React App
        </h1>
      </div>

      

      <Weather /> 
    </>
  );
}

export default App;
