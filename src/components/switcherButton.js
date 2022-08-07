import React from 'react'
import { MainContext, useContext } from '../context';

export default function SwitcherButton() {
    const {theme,setTheme} = useContext(MainContext);
    const switchTheme = () =>{
        setTheme(theme==='light' ? 'dark' : 'light')
      }
  return (
    <>
        <button onClick={switchTheme}>Switch Theme</button>
    </>
  )
}
