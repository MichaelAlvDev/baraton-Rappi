import { useState } from 'react';
import './App.css'
import GridProductos from './components/GridProductos'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
  const [showBar, setShowbar] = useState(true);
  const handleShowBar = () => {
    // setShowbar(showBar ? false : true);
    setShowbar(showbar =>!showbar)
  }
  return (
    <>
      <Header
        handleShowBar={handleShowBar}
      />
      <main className='mainContent'>
        <SideBar
          showBar={showBar}
        />
        <GridProductos />
      </main>
    </>
  )
}

export default App
