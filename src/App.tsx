import { ChangeEvent, MouseEvent, useState } from 'react';
import './App.css'
import GridProductos from './components/GridProductos'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
  const [showBar, setShowbar] = useState(true); //state para mostrar el SideBAR
  const [toSortMenu, setToSortMenu] = useState<number>(1) //state para filtrar productos egun el nivel seleccionado del menu categorias
  // Estados para Filtrar (filter)
  const [disponible, setDisponible] = useState(false);
  const [rangoPrecios, setRangoPrecios] = useState({ min: 0, max: 8000 });
  const [cantidadEnStock, setCantidadEnStock] = useState(800);
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
  /*Funciones para controlar el Estado del componente Filter*/
  function filterByDisponible(e: ChangeEvent<HTMLInputElement>): void {
    setDisponible(e.target.checked);
  }
  function filterByCantidadEnStock(e: any): void { //Fix Tipo del Any aqui pls
    setCantidadEnStock(e.target.value);
  }
  function filterByPrecioMax(e: any): void { //Fix Tipo del Any aqui pls
    setRangoPrecios({min:rangoPrecios.min,max: e.target.value});
  }
  function filterByPrecioMin(e: any): void { //Fix Tipo del Any aqui pls
    setRangoPrecios({min: e.target.value,max:rangoPrecios.max});
  } 
  /*Funciones para controlar el Estado del componente SORT*/
  function sortByDisponible(): void { //Maneja el estado Sort disponible
    setSortDisponible(!sortDisponible)
  };
  function sortByRangoPrecios(): void { //Maneja el estado Sort Precios
    setsortRangoPrecios(!sortRangoPrecios)
  };
  function sortByCantidadEnStock(): void { //Maneja el estado Sort En stock
    setsortCantidadEnStock(!sortCantidadEnStock)
  };
  return (
    <>
      <Header
        handleShowBar={handleShowBar}
      />
      <main className='mainContent'>
        <SideBar
          //funcion para mostar/ocultar sidebar
          showBar={showBar}
          //funcion para seleccionar categoria
          fnSortByMenu={sortByMenu}
          //funciones para ordenar States para ordernar
          fnSortByDisponible={sortByDisponible}
          stSortDisponible={sortDisponible}
          fnSortByRangoPrecios={sortByRangoPrecios}
          stSortRangoPrecios={sortRangoPrecios}
          fnSortByCantidadEnStock={sortByCantidadEnStock}
          stSortCantidadEnStock={sortCantidadEnStock}
          //funciones para filtrar y States para filtrar
          fnFilterByDisponible={filterByDisponible}
          stFilterDisponible={disponible}
          fnFilterByCantidadEnStock={filterByCantidadEnStock}
          stCantidadEnStock={cantidadEnStock}
          fnFilterByPrecioMax={filterByPrecioMax}
          fnFilterByPrecioMin={filterByPrecioMin}
          stRangoPrecios={rangoPrecios}
        />
        <GridProductos
          //state para seleccionar categoria
          toSortMenu={toSortMenu}
          stSortDisponible={sortDisponible}
        />
      </main>
    </>
  )
}

export default App
