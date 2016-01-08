class Bill extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='blue-grey darken-1 col s12'>
        <div className='row '>
          <span className='col  s4 left-align'>{this.props.name}</span>
          <span className='col s4 center'>due on the {this.props.date}</span>
          <span className='col red-text s4 right-align'>-${this.props.amount}</span>
        </div>
      </div>
    )
  }
}
