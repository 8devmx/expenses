import axios from 'axios'
const Categories = async (url, token) => {
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

const InsertCategories = async (url, token, data) => {
  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export { Categories, InsertCategories }