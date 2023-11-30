import React, { useEffect, useState } from 'react'
import LayoutApp from '@/components/layouts/layout-app'
import Category from '@/components/Category'
import Categories from '@/services/Categories'
import useSWR from 'swr'

const fetcher = async url => {
  const token = sessionStorage.getItem('token')
  const data = await Categories(url, token)
  return data.data.categories
}

const Dashboard = () => {
  const { data, error, isLoading } = useSWR('http://127.0.0.1:8000/categories', fetcher, {
    refreshInterval: 3000
  })
  console.log({ data, error, isLoading })
  if (error) return <div>Error al cargar</div>
  if (isLoading) return <div>Cargando</div>

  return (
    <LayoutApp>
      <main>
        <h2 className='text-3xl mb-12 font-semibold text-gray-800'>Categories</h2>
        <div className='grid gap-4 grid-cols-3'>
          {data.map((cat) => {
            return <Category key={cat.id} data={cat} />
          })}
        </div>
      </main>
    </LayoutApp >
  );
}

export default Dashboard;
