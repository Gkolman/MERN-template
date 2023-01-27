import React from 'react'
import axios from 'axios'
import Button from './button.jsx'
import Table from './table.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quotes: []
    }
  }

  getRandomNumber = () => {return Math.floor(Math.random() * 255)}
  getRandomColor = () => {return`rgb(${this.getRandomNumber()}, ${this.getRandomNumber()}, ${this.getRandomNumber()}, 0.5)`}

  renderQuote = (quote) => {
      return (
        <tr style={{
          'backgroundColor': this.getRandomColor()
          }}>
          <td>{quote.a}</td>
          <td>{quote.q}</td>
        </tr>
      )
  }

  getQuote = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/quote')
      const quotes = this.state.quotes
      quotes.push(this.renderQuote(data[0]))
      this.setState({quotes})
    } catch(error) {
      console.log("error getting quote ->", error)
    }
  }

  render() {
    return (
      <div>
        <Button getQuote = {this.getQuote} />
        <Table quotes={ this.state.quotes } />
        <form method="post" action="http://localhost:3000/send/it">
          <input type="text" placeholder="search"></input>
          <button type="button"> send </button>
        </form>
      </div>

    )
  }
}

export default App