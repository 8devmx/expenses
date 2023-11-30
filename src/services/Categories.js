import axios from 'axios'
const Categories = async (token) => {
  return axios.get('http://127.0.0.1:8000/categories', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export default Categories