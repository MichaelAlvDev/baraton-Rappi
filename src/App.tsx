import { MouseEvent, useState } from 'react';
import './App.css'
import GridProductos from './components/GridProductos'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
  const [showBar, setShowbar] = useState(true); //state para mostrar la SideBAr
  const [toSortMenu,setToSortMenu] = useState<number>(1) //state para filtrar productos egun el nivel seleccionado del menu categorias
  const handleShowBar = ():void => { //Maneja el estado para mostrar el sidebar desde el menu
    setShowbar(showbar => !showbar)
  }
  function sortByMenu(e: MouseEvent<HTMLAnchorElement>):void {
    e.preventDefault();
    const listTarget = e.currentTarget.parentElement as HTMLLIElement;
    setToSortMenu(listTarget.value)

  };

  return (
    <>
      <Header
        handleShowBar={handleShowBar}
      />
      <main className='mainContent'>
        <SideBar
          showBar={showBar}
          fnSortByMenu={sortByMenu}
        />
        <GridProductos 
          toSortMenu={toSortMenu}
        />
      </main>
    </>
  )
}

export default App
