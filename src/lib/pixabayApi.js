// Pixabay API
import axios from 'axios'

export const getImages = async (searchTerm, lang = 'en') => {
  try {
    return await axios.get(process.env.REACT_APP_PIXABAY_URL, {
      params: {
        key: process.env.REACT_APP_PIXABAY_API_KEY,
        q: searchTerm,
        lang: lang,
        image_type: 'photo',
        safesearch: true,
        page: 1,
        per_page: 5
      }
    })
  } catch (error) {
    console.error(error)
  }
}
