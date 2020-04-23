
import React, { useState, useEffect } from 'react'

// APIs
import { getRandomWord } from '../../lib/wordnikApi'
import { getImages } from '../../lib/pixabayApi'

export const Home = () => {
  const [newWord, setNewWord] = useState('')
  const [images, setImages] = useState([])

  // Get new word from Wordnik API
  useEffect(() => {
    getRandomWord().then(({ data }) => setNewWord(data.word))
  }, [])

  // Get images
  useEffect(() => {
    getImages(newWord).then(({ data }) => setImages(data.hits))
  }, [newWord])

  console.log(images)

  return (
    <div>
      <h1>{(newWord) || 'Loading...'}</h1>
      <ul>
        {images.map((value, index) => {
          return <li key={index}><img src={value.webformatURL} /></li>
        })}
      </ul>
    </div>
  )
}
