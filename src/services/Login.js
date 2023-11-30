import axios from 'axios'

const Login = async (data) => {
  return axios.post('http://127.0.0.1:8000/auth/login', data)
}

export default Login