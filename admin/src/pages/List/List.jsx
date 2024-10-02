import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './List.css';
import Loader from '../../loader/Loader';

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error al obtener la lista de alimentos");
      }
    } catch (err) {
      setError("Hubo un problema al cargar los datos.");
      toast.error("Error de red");
    } finally {
      setLoading(false);
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList(); // Refresca la lista después de eliminar
      } else {
        toast.error("No se pudo eliminar el alimento");
      }
    } catch (err) {
      toast.error("Error de red al eliminar");
    }
  };

  useEffect(() => {
    fetchList();
  }, []); // Sólo se ejecuta una vez al montar el componente

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.length === 0 ? (
          <p>No hay alimentos disponibles.</p>
        ) : (
          list.map((item) => (
            <div key={item._id} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className='cursor' onClick={() => removeFood(item._id)}>X</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;
