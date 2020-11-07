
import '../../App.css';
import React, {useState } from 'react'
import Navbar from '../Navbar'
import InfoSection from '../InfoSection'
import LogIn from '../LogIn'
import Register from "../Register";
import News from "../News"
import Footer from "../Footer"

function App() {

  const [displaylogin, setdisplaylogin] = useState(false)
  const [displayRegister,setDisplayRegister] = useState(false)

  const showLogin = () => setdisplaylogin(!displaylogin)
  const showRegister = () => setDisplayRegister(!displayRegister)
  
  return (
    <div className="App">
        <Navbar showLogin={showLogin}/> 
        <LogIn displaylogin={displaylogin} showLogin={showLogin} showRegister={showRegister} />
        <Register displayRegister={displayRegister} showRegister={showRegister} showLogin={showLogin}/>
        <InfoSection />
        <News />
        <Footer />
    </div>
  );
}

export default App;
