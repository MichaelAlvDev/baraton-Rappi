import stlyes from './filter.module.css';

const Filter = () => {
    return (
        <div className={stlyes.filterContainer}>
            <button>
               disponibilidad
            </button>
            <button>
                cantidad
            </button>
            <button>
                precio
            </button>
        </div>
    );
};

export default Filter;