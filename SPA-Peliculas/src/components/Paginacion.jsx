import React from 'react';

function Paginacion({ paginaActual, totalPaginas, setPaginaActual }) {
  return (
    <div className="paginacion">
      <button disabled={paginaActual === 1} onClick={() => setPaginaActual(paginaActual - 1)}>
        Anterior
      </button>
      <span>
        Página {paginaActual} de {totalPaginas}
      </span>
      <button disabled={paginaActual === totalPaginas} onClick={() => setPaginaActual(paginaActual + 1)}>
        Siguiente
      </button>
    </div>
  );
}

export default Paginacion;