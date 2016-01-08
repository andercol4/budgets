class Income extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <div className='col s12 m6'>
          <div className='card row indigo darken-4'>
            <p className='col s6 white-text'>{this.props.name}</p>
            <p className='col s6 white-text right-align'>{this.props.date} of the month</p>
            <h4 className='col 12 green-text'>+${this.props.amount}</h4>
          </div>
        </div>
      </div>
    )
  }
}
