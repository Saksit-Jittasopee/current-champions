import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import WWEInfo from './components/WWEInfo';
import NXTInfo from './components/NXTInfo';
import AEWInfo from './components/AEWInfo';
import TNAInfo from './components/TNAInfo';
import NJPWInfo from './components/NJPWInfo';
import { useState, useEffect } from 'react';
import './App.css'
 import { HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("mode") || "light")

    useEffect(()=>{
    localStorage.setItem("mode",theme) //localStorage บันทึกข้อมูล
  },[theme])

  return (
  <Router>
  <div className={theme}>
  <div className='App'>
  <Header theme={theme} setTheme={setTheme}/>
  <div className='Content'>
  <Routes>
    <Route path="/" element={<Home title="Home Page"/>} exact />
    <Route path="/wwe" element={<WWEInfo title="WWE - World Wrestling Entertainment"/>} exact />
    <Route path="/nxt" element={<NXTInfo title="WWE - World Wrestling Entertainment (NXT)"/>} exact />
    <Route path="/aew" element={<AEWInfo title="AEW - All Elite Wrestling"/>} exact />
    <Route path="/tna" element={<TNAInfo title="TNA - Total Nonstop Action Wrestling"/>} exact />
    <Route path="/njpw" element={<NJPWInfo title="NJPW - New Japan Pro Wrestling"/>} exact />
    <Route path="*" element={<Navigate to="/" replace/>} />
  </Routes>
  </div>
  <Footer title="Made by Saksit Jittasopee"></Footer>
  </div>
  </div>
  </Router>
  )
}

export default App;
