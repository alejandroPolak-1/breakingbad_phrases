import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Phrase from './components/Phrase'

//Styled Components

const Conteiner = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`

// End Styled Components

function App() {
  //State of Phrases
  const [phrase, setPhrase] = useState({})

  // Query API
  const handleClick = async () => {
    const api = await fetch(
      'https://breaking-bad-quotes.herokuapp.com/v1/quotes',
    )
    const phrase = await api.json()
    setPhrase(phrase[0])
  }

  // Loading phrase
  useEffect(() => {
    handleClick()
  }, [])

  return (
    <Conteiner>
      <Phrase phrase={phrase} />
      <Button onClick={() => handleClick()}>Get Phrase</Button>
    </Conteiner>
  )
}

export default App
