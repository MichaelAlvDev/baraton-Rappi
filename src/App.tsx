import { MouseEvent, useState } from 'react';
import './App.css'
import GridProductos from './components/GridProductos'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
  const [showBar, setShowbar] = useState(true); //state para mostrar el SideBAR
  const [toSortMenu, setToSortMenu] = useState<number>(1) //state para filtrar productos egun el nivel seleccionado del menu categorias
  // Estados para Filtrar (filter)
  // const [disponible, setDisponible] = useState(false);
  // const [rangoPrecios, setRangoPrecios] = useState({ min: 0, max: Infinity });
  // const [cantidadEnStock, setCantidadEnStock] = useState(0);
  // Estados para Ordenar (sort)
  const [sortDisponible, setSortDisponible] = useState(false);
  const [sortRangoPrecios, setsortRangoPrecios] = useState(false);
  const [sortCantidadEnStock, setsortCantidadEnStock] = useState(false);

  const handleShowBar = (): void => { //Maneja el estado para mostrar el sidebar desde el menu
    setShowbar(showbar => !showbar)
  }
  function sortByMenu(e: MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    const listTarget = e.currentTarget.parentElement as HTMLLIElement;
    setToSortMenu(listTarget.value)
  };
  /*Funciones para controlar el Estado del componente SORT*/
  function sortByDisponible(): void { //Maneja el estado Sort disponible
    setSortDisponible(!sortDisponible)
  };
  function sortByRangoPrecios(/*e: MouseEvent<HTMLAnchorElement>*/): void { //Maneja el estado Sort Precios
    setsortRangoPrecios(!sortRangoPrecios)
  };
  function sortByCantidadEnStock(/*e: MouseEvent<HTMLAnchorElement>*/): void { //Maneja el estado Sort En stock
    setsortCantidadEnStock(!sortCantidadEnStock)
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
          fnSortByDisponible={sortByDisponible}
          stSortDisponible={sortDisponible}
          fnSortByRangoPrecios={sortByRangoPrecios}
          stSortRangoPrecios={sortRangoPrecios}
          fnSortByCantidadEnStock={sortByCantidadEnStock}
          stSortCantidadEnStock={sortCantidadEnStock}
        />
        <GridProductos
          toSortMenu={toSortMenu}
          stSortDisponible={sortDisponible}
        />
      </main>
    </>
  )
}

export default App
