json.bills @bills do |bill|
  json.id bill.id
  json.name bill.name
  json.amount bill.amount
  json.date bill.date
end
