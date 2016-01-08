class IncomesController < ApplicationController
  def index
    @incomes = Income.all.order(amount: :desc)
  end

  def create
    @income = Income.create(income_params)
    render 'income'
  end

  private

  def income_params
    params.require(:income).permit(:name, :amount, :date)
  end
end
