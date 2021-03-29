import React,{useState,useEffect} from 'react';
import './App.css';
import Hero from './Hero';
// import Navbar from './Navbar';
import Navbar2 from './Navbar2';
// import Skills from './Skills';
import Loader from "./Loader";
import Socialbtn from './Socialbtn';

function App() {
    const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
        { loader
            ? <Loader/>
          :
          <> 
          <Navbar2/>
       <Socialbtn/>
       <Hero/>
       </> }
     
    </div>
  );
}

export default App;
