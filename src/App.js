
import './App.css';
import Hero from './Hero';
// import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Skills from './Skills';

import Socialbtn from './Socialbtn';

function App() {
  return (
    <div className="App">
       {/* <Navbar/> */}
       <Navbar2/>
       <Socialbtn/>
       <Hero/>
       <Skills/>

    </div>
  );
}

export default App;
