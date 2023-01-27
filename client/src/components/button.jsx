import React from 'React'
class Button extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  
  render() {
    return (
    <div> 
      <button onClick={(event) => {this.props.getQuote(event)}}> Get a quote </button>
    </div>
    )
  }
}
export default Button