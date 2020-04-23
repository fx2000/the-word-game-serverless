// Wordnik API
import axios from 'axios'

export const getRandomWord = async (partOfSpeech = 'proper-noun', minCorpusCount = 50000, maxCorpusCount = -1, hasDictionaryDef = true) => {
  try {
    return await axios.get(process.env.REACT_APP_WORDNIK_URL + 'words.json/randomWord', {
      params: {
        api_key: process.env.REACT_APP_WORDNIK_API_KEY,
        includePartOfSpeech: partOfSpeech,
        minCorpusCount: minCorpusCount,
        maxCorpusCount: maxCorpusCount,
        hasDictionaryDef: hasDictionaryDef
      }
    })
  } catch (error) {
    console.error(error)
  }
}
