import React from 'react'
const QuotesTable = function({quotes}) {
  if (!quotes.length) { return null }
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
          {quotes}
        </tbody>
      </table>
    </div>
  )
}

export default QuotesTable