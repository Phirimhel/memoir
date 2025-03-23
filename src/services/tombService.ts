
import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com'

export default {
  async getPhotos() {
    try {
      const response = await axios.get(`${API_URL}/photos`)
      return response.data
    } catch (error) {
      console.error('Error fetching photos:', error)
      throw error
    }
  }
}
