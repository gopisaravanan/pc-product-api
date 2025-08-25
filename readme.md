# Get all orders for user123 (returns all 7 orders)
GET http://localhost:7001/api/orders?userId=user123

GET http://localhost:7001/api/orders?userId=user123&limit=1

# Search for products with "pan" in the title
GET http://localhost:7001/api/orders?userId=user123&filter=pan

# Search for "chef" products (returns Chef's Knife)
GET http://localhost:7001/api/orders?userId=user123&filter=chef

# Search for "skillet" and limit to 1 result
GET http://localhost:7001/api/orders?userId=user123&filter=skillet&limit=1

# Search for "bowl" products (returns Mixing Bowl Set)
GET http://localhost:7001/api/orders?userId=user123&filter=bowl

# Search for kitchen items with "tool" in the title
GET http://localhost:7001/api/orders?userId=user123&filter=tool