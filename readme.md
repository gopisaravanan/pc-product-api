# Get all orders for globalId 1621989
GET http://localhost:7001/GetOrderHistory/orders?globalId=1621989

# Get orders within a specific date range
GET http://localhost:7001/GetOrderHistory/orders?globalId=1621989&startDate=2025-01-01&endDate=2025-03-05

# Get orders from a specific start date
GET http://localhost:7001/GetOrderHistory/orders?globalId=1621989&startDate=2025-01-01

# Get orders up to a specific end date
GET http://localhost:7001/GetOrderHistory/orders?globalId=1621989&endDate=2025-02-28

# Example with different globalId (for demonstration)
GET http://localhost:7001/GetOrderHistory/orders?globalId=150768&startDate=2025-01-01&endDate=2025-03-05