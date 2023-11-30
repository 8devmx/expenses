import React from 'react';
const type = 0
const Category = ({ data }) => {
  return (
    <div className="text-center py-16 px-4 rounded" style={{ background: `#${data.color}` }}>
      <img src="https://picsum.photos/35" alt="" className="block mx-auto mb-4" />
      <h3 className='text-3xl font-semibold text-gray-800'>{data.name}</h3>
      <p className="text-gray-600 mb-4">{data.type == 1 ? 'Income' : 'Expense'}</p>
      <div className='flex gap-2 justify-center'>
        <button className='font-semibold text-lime-600'>Editar</button>
        <button className='font-semibold text-red-600'>Eliminar</button>
      </div>
    </div>
  );
}

export default Category;
