import './App.css'
import GridProductos from './components/GridProductos'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {

  return (
    <>
      <Header />
      <main className='mainContent'>
        <SideBar />
        <GridProductos />

      </main>
    </>
  )
}

export default App
