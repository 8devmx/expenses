import axios from 'axios'
const Categories = async (url, token) => {
  console.log(url)
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export default Categories