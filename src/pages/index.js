import Router from 'next/router'
import Login from '@/services/Login'

const handleSubmit = async (e) => {
  e.preventDefault()
  const data = {
    email: e.target[0].value,
    password: e.target[1].value
  }
  const login = await Login(data)
  if (login.status !== 200) {
    console.log('Hubo un error en la petición')
    return false
  }
  const token = login.data.token
  sessionStorage.setItem('token', token)
  Router.push("/dashboard")

}


export default function Home () {
  return (
    <main className="h-screen flex justify-center items-center">
      <form className="w-80" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold leading-6 text-gray-900">Correo electrónico</label>
          <input type="text" placeholder="Escribe tu correo" className="block w-full rounded-md border-solid border border-inherit text-gray-900 py-2 px-4" />
        </div>
        <div className="my-5">
          <label className="block text-sm font-semibold leading-6 text-gray-900">Contraseña</label>
          <input type="password" className="block w-full rounded-md border-solid border border-inherit text-gray-900 py-2 px-4" placeholder="Escribe tu contraseña" />
        </div>
        <div>
          <button type="submit" className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 w-full">Iniciar sesión</button>
        </div>
      </form>
    </main>
  )
}
