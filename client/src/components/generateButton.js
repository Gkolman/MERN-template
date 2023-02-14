import React from 'react'
const GenerateButton = function(props) {
  return (
  <div> 
    <button onClick={(event) => {props.getQuote(event)}}> Get a quote </button>
  </div>
  )
}
export default GenerateButton