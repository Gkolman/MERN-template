import React from 'React'
class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    if (!this.props.quotes.length) { return null }
    return (
    <div> 
      <table id="quoteTable">
        <thead>
          <tr className= "quoteHeader">
            <th> Author </th>
            <th> Quote </th>
          </tr>
        </thead>
        <tbody>
          {this.props.quotes}
        </tbody>
      </table>
    </div>
    )
  }
}

export default Table