import React, { useState } from 'react'
import axios from 'axios'
import GenerateButton from './generateButton.js'
import QuotesTable from './quotesTable.js'

function App(){
  const [state, setState] = useState({
     quotes: [], 
     name: '',
     email: '',
    })

  const getRandomNumber = () => {return Math.floor(Math.random() * 255)}
  const getRandomColor = () => {return`rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, 0.5)`}

  const renderQuote = function(quote, id) {
    return (
      <tr key={id} style={{
        'backgroundColor': getRandomColor()
        }}>
        <td>{quote.a}</td>
        <td>{quote.q}</td>
      </tr>
    )
}
  const getQuote = async function() {
    try {
      const { data } = await axios.get('http://localhost:3000/quote')
      const quotes = state.quotes
      quotes.push(renderQuote(data[0], quotes.length))
      setState({ quotes })
    } catch(error) {
      console.log("error getting quote ->", error)
    }
  }

  const updateField = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    state[name] = value
    setState(state)
  }

  return (
    <div>
      <GenerateButton getQuote = { getQuote } />
      <QuotesTable quotes={ state.quotes } /> 
      <form>
        <input type = "text" placeholder = "first name" name="name" onChange={(e) => {updateField(e)}}/>
        <input type = "text" placeholder = "your email" name="email" onChange={(e) => {updateField(e)}}/>
        <button> submit!</button>
      </form>
    </div>
  )
}
export default App