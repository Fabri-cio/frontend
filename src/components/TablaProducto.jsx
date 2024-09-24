import { useProductos } from "../hooks/useProductos";
import BotonActualizar from "./BotonActualizar";
import BotonEliminar from "./BotonEliminar";

const TablaProducto = () => {
  const { producto, loading, error } = useProductos([]);  // Desestructuramos los valores del Hook

  if (loading) {
    return <p>Cargando productos...</p>;  // Muestra un mensaje mientras carga
  }

  if (error) {
    return <p>Error al cargar productos: {error}</p>;  // Muestra el error si ocurre
  }

  return (
    <div className="container">
      <h1>Productos</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Actualizar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {producto.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.categoria.nombre_categoria}</td>
              <td>{producto.stock}</td>
              <td>{producto.precio_venta}</td>
              <td><BotonActualizar/></td>
              <td><BotonEliminar/></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProducto;
