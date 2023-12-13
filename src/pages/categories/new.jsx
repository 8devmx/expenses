import LayoutApp from '@/components/layouts/layout-app';
import React from 'react';
import Router from 'next/router';
import { useForm } from 'react-hook-form'
import { InsertCategories } from '@/services/Categories'


const NewCategory = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = async (data) => {
    const url = 'http://127.0.0.1:8000/categories'
    const token = sessionStorage.getItem('token')
    const response = await InsertCategories(url, token, data)
    if (!response.status === 200) {
      alert('Algo ha salido mal')
      return
    }
    Router.push("/categories")
  }
  return (
    <LayoutApp>
      <form className="w-80 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor="name">Nombre</label>
          <input type="text" className="block w-full rounded-md border-solid border border-inherit text-gray-900 py-2 px-4  mb-5" {...register('name', { required: true })} />
          <span className='text-red-400'>{errors?.name?.type === 'required' && 'El campo es requerido'}</span>
        </div>
        <div>
          <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor="color">Color</label>
          <input type="text" className="block w-full rounded-md border-solid border border-inherit text-gray-900 py-2 px-4  mb-5" {...register('color', { required: true, maxLength: 6 })} />
          <span className='text-red-400'>{errors?.color?.type === 'required' && 'El campo es requerido'}</span>
          <span className='text-red-400'>{errors?.color?.type === 'maxLength' && 'El campo solo admite hasta 6 caracteres'}</span>
        </div>
        <div>
          <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor="icon">Ícono</label>
          <input type="text" className="block w-full rounded-md border-solid border border-inherit text-gray-900 py-2 px-4  mb-5" {...register('icon')} />
        </div>
        <div>
          <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor="type">Tipo</label>
          <select className="block w-full rounded-md border-solid border border-inherit text-gray-900 py-2 px-4 mb-5" {...register('type')}>
            <option value="1">Expense</option>
            <option value="2">Income</option>
          </select>
        </div>
        <div>
          <button type="submit" className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 w-full">Guardar</button>
        </div>
      </form>
    </LayoutApp>
  );
}

export default NewCategory;
