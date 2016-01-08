class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.string :name
      t.string :category
      t.float :amount
      t.integer :date

      t.timestamps null: false
    end
  end
end
