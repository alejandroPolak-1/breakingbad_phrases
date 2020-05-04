import React from 'react'
import styled from '@emotion/styled'

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
`

// End Styled Components

const handleClick = () => {
const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
const phrase = api.then(request => request.json())
phrase.then(result => console.log(result))

}

function App() {
  return (
    <Conteiner>
       <Button
      onClick={() => handleClick()}
      >Get Phrase</Button>
    </Conteiner>
  )
}

export default App
