class BankAccount extends React.Component{
  constructor(props){
    super(props);
    this.submitNewIncome = this.submitNewIncome.bind(this);
    this.submitNewBill = this.submitNewBill.bind(this);
    this.state = {incomes: [], total: 0, bills: []};
  }
  componentDidMount(){
    $.ajax({
    url: '/incomes',
    type: 'GET'
  }).success( data => {
    this.setState({incomes: data.incomes});
  });
  $.ajax({
  url: '/bills',
  type: 'GET'
}).success( data => {
  this.setState({bills: data.bills});
});
  }
  submitNewBill(){
    let date = this.refs.newBillDate.value
    if(date < 30){
      $.ajax({
        url: '/bills',
        type: 'POST',
        data: {bill: {name: this.refs.newBillName.value, amount: this.refs.newBillAmount.value, date}}
      }).success( data => {
        bills = this.state.bills;
        bills.push(data.bill)
        this.refs.newBillName.value = null
        this.refs.newBillAmount.value = null
        this.refs.newBillDate.value = null
        this.setState({bills})
      })
    } else {
      alert('Not a valid Date')
    }
  }
  submitNewIncome() {
    let date = this.refs.newIncomeDate.value
    if(date < 30){
      $.ajax({
        url: '/incomes',
        type: 'POST',
        data: {income: {name: this.refs.newIncomeName.value, amount: this.refs.newIncomeAmount.value, date}}
      }).success( data => {
        incomes = this.state.incomes;
        incomes.push(data.income)
        this.refs.newIncomeName.value = null
        this.refs.newIncomeAmount.value = null
        this.refs.newIncomeDate.value = null
        this.setState({incomes})
      })
    } else {
      alert('Not a valid Date')
    }
  }
  incomeTotal(total){
    return(
      <div>
        <h3 className='s12 center green-text' ref='totalGross'>Total Grossed: +${total}</h3>
      </div>
    )
  }
  render(){
    let total = 0
    let incomes = this.state.incomes.map( income => {
      total += income.amount
      return(<Income key={`income-${income.id}`} {...income} />);
    });
    let bills = this.state.bills.map( bill =>{
      return(<Bill key={`bill-${bill.id}`} {...bill} />)
    });
    return(
      <div>
        <div className='row'>
          <div className='col offset-s1 s10'>
            <input type='text' placeholder='New Income Name' ref='newIncomeName' />
            <input type='number' placeholder='New Income Amount' ref='newIncomeAmount' />
            <input type='number' placeholder='Day of month new income is recieved' ref='newIncomeDate' />
            <button onClick={this.submitNewIncome}>Save New Income</button>
          </div>
          <div className='row'>
            {incomes}
          </div>
          <div className='row blue-grey darken-3'>
            {this.incomeTotal(total)}
            {bills}
            <div className='col offset-s1 s10'>
              <input type='text' placeholder='New Bill Name' ref='newBillName' />
              <input type='number' placeholder='New Bill Amount' ref='newBillAmount' />
              <input type='number' placeholder='Day of month new bill is removed' ref='newBillDate' />
              <button onClick={this.submitNewBill}>Save New Bill</button>
            </div>
          </div>
        </div>
      </div>)
  }
}
