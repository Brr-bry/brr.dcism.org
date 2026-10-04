
import { useState } from 'react';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';

import "./index.css";
function App() {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true) } />}{" "}

      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded? "opacity-100" : "opacity-0"} bg-bg-dark text-primary`} >
        <Navbar isDark={isDark} setIsDark={setIsDark}/>
      </div>
    </>
  )
}

export default App
