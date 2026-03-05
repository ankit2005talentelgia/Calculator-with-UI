import { useState } from 'react';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <div style={isDark?{backgroundColor:'#787878'}:{}}>
     <Navbar isDark={isDark} setIsDark={setIsDark}/>
     <Home isDark={isDark}/>
     <Footer/>
    </div>
  )
}

export default App
