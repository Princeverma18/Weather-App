// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import Weather from './Weather';





function App() {

  let handleClick = () => {
    console.log("button has clicked");
  }
  return (
    <>
    {/* <SearchBox />
    <InfoBox /> */}
    <Weather />
    </>
  )
}

export default App
