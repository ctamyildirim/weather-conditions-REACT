import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { MainContext } from './context';


function App() {
  const [theme,setTheme] = useState('light');
  
  useEffect(()=>{
    document.body.className = theme;
  },[theme])
  
  const data = {
    theme,
    setTheme
  }
  
  return (
    <MainContext.Provider value={data}>
      <Header theme={theme}></Header>
      <Footer theme={theme} setTheme ={setTheme}></Footer>
    </MainContext.Provider>
  );
}

export default App;
