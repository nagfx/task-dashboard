import './App.css';
// import Header from './components/Header';
// import Subheader from './components/Subheader';
import Login from './components/Login';
import Timenow from './components/Timenow';



function App() {
  

  return (
    <div>
          <div className='container-body'>
            <Login />
            <Timenow />
          </div>
    </div>

  );
}

export default App;
