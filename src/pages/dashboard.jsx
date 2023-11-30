import React, { useEffect, useState } from 'react'
import LayoutApp from '@/components/layouts/layout-app'
import Category from '@/components/Category'
import Categories from '@/services/Categories'


const Dashboard = () => {
  const [data, setData] = useState([])
  const request = async (token) => {
    const categories = await Categories(token)
    if (categories.status === 200) {
      setData(categories.data.categories)
    }
  }

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    request(token)
  }, [data])

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
