import React from "react";

const TablaInventario = () => {
  return (
    <div className="container">
      <h1>Inventario de Productos</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ketchup</td>
            <td>Condimentos</td>
            <td>50</td>
            <td>$2.50</td>
          </tr>
          <tr>
            <td>Mostaza</td>
            <td>Condimentos</td>
            <td>30</td>
            <td>$1.75</td>
          </tr>
          {/* Aquí puedes agregar más filas de ejemplo */}
        </tbody>
      </table>
    </div>
  );
};

export default TablaInventario;
