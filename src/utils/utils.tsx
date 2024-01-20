import { MouseEvent } from "react";
import styles from "../components/menu.module.css"
import {  Productos } from "../types/types";


//Funcion para Mostrar y ocultar la barra lateral
export function toggle_list(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const listTarget = e.currentTarget.parentElement as HTMLLIElement;
    if (listTarget.classList.contains(styles.open)) {
        listTarget.classList.replace(styles.open, styles.closed);
        // listTargetChilds? listTargetChilds.classList.replace(styles.open, styles.closed):null
        // en la linea anterior trate de ocultar todos los submenus al cerrar un padre pero me da un error el el ultimo hijo "undefined"
    } else if (listTarget.classList.contains(styles.closed)) {
        listTarget.classList.replace(styles.closed, styles.open);
    } else {
        listTarget.classList.add(styles.open);
    }
}
export function extractNumericValue (priceString: string): number {
    // Remover símbolo de dólar y comas
    const numericString = priceString.replace(/[^\d.-]/g, '');
    // Convertir a número
    return parseFloat(numericString);
};

// Funciones para filtrar productos
export function filtrarPorDisponibilidad(productos: Productos, disponible: boolean) {
    return productos.filter(producto => producto.available === disponible);
};

export function filtrarPorRangoDePrecios(productos: Productos, minPrice:number, maxPrice:number) {
    return productos.filter(producto => producto.price >= minPrice && producto.price <= maxPrice);
};

export function filtrarPorCantidadEnStock(productos: Productos, cantidad:number) {
    return productos.filter(producto => producto.quantity >= cantidad);
};

export function  filtrarPoCategoria(productos : Productos, categoria:number){
    return productos.filter(producto => producto.sublevel_id === categoria)
};

  