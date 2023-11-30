import React from 'react';
import Link from 'next/link'
import styles from '@/styles/Sidebar.module.css'

const Sidebar = ({ sidebarCollapse }) => {
  return (
    <aside className={`bg-slate-300 ${styles.sidebar} ${sidebarCollapse == 1 ? styles.is_collapsed : ''}`}>
      <h1 className='text-3xl mb-12 text-center font-semibold text-gray-800'>Expenses</h1>
      <ul>
        <li>
          <Link href="./" className="text-xl font-semibold mb-2 block">Categories</Link>
        </li>
        <li>
          <Link href="./" className="text-xl font-semibold mb-2 block">Expenses</Link>
        </li>
        <li>
          <Link href="./" className="text-xl font-semibold mb-2 block">Users</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
