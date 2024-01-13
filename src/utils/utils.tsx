import { MouseEvent } from "react";
import styles from "../components/menu.module.css"
import { Producto } from "../types/types";


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
export function filtrarPorDisponibilidad(productos: Producto, disponible: boolean) {
    return productos.filter(producto => producto.available === disponible);
};

export function filtrarPorRangoDePrecios(productos: Producto, minPrice:number, maxPrice:number) {
    return productos.filter(producto => producto.price >= minPrice && producto.price <= maxPrice);
};

export function filtrarPorCantidadEnStock(productos: Producto, cantidad:number) {
    return productos.filter(producto => producto.quantity >= cantidad);
};

// Funciones para ordenar productos
export function ordenarPorPrecio(productos: Producto, orden:string) {
    return orden === 'asc' ? productos.sort((a, b) => a.price - b.price) : productos.sort((a, b) => b.price - a.price);
};

export function ordenarPorDisponibilidad(productos: Producto, orden:string) {
    return orden === 'disponible' ? productos.filter(producto => producto.available) : productos.filter(producto => !producto.available);
};

export function ordenarPorCantidadEnStock(productos: Producto, orden:string) {
    return orden === 'asc' ? productos.sort((a, b) => a.quantity - b.quantity) : productos.sort((a, b) => b.quantity - a.quantity);
};