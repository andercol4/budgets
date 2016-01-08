class BillsController < ApplicationController
  def index
    @bills = Bill.all.order(amount: :desc)
  end

  def create
    @bill = Bill.create(bill_params)
    render 'bill'
  end

  private
  def bill_params
    params.require(:bill).permit(:name, :amount, :date)
  end
end
