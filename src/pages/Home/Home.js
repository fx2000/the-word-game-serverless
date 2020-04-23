
import React, { useState, useEffect } from 'react'

// APIs
import { getRandomWord } from '../../lib/wordnikApi'

export const Home = () => {
  const [newWord, setNewWord] = useState('')

  // Get New Word from Wordnik API
  useEffect(() => {
    getRandomWord().then(({ data }) => setNewWord(data.word))
  }, [])

  return (
    <div>
      <h1>{(newWord) || 'Loading...'}</h1>
    </div>
  )
}
