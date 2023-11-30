import styles from '@/styles/LayoutApp.module.css'
import { useState } from 'react'
import Sidebar from '@/components/sidebar'
export default function LayoutApp ({ children }) {
  const [sidebarCollapse, setSidebarCollapse] = useState(0)
  const collapseSidebar = (sidebarCollapse) => {
    if (sidebarCollapse == 1) {
      setSidebarCollapse(0)
    } else {
      setSidebarCollapse(1)
    }
  }

  return (
    <div className={styles.wrapper}>
      <Sidebar sidebarCollapse={sidebarCollapse} />
      <main className={`${styles.content} ${sidebarCollapse == 1 ? styles.is_full_width : ''}`}>
        <div className="container mx-auto">
          <button onClick={() => collapseSidebar(sidebarCollapse)} className='bg-slate-200 p-4 rounded text-gray-800 font-semibold group-hover:bg-slate-900 hover:text-zinc-50 mb-10'></button>
          {children}
        </div>
      </main>
    </div>
  )
}