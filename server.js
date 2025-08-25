const express = require('express');
const app = express();
const port = process.env.PORT || 7001;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const orderHistory = [
    {
      "orderNumber": "1052776",
      "userId": "user123",
      "productTitle": "Nonstick Fry Pan 10-Inch",
      "category": "Cookware",
      "price": 45.99,
      "currency": "USD",
      "stock": 25,
      "description": "Durable nonstick fry pan ideal for everyday cooking, easy to clean and PFOA-free."
    },
    {
      "orderNumber": "1052865",
      "userId": "user123",
      "productTitle": "Mixing Bowl Set with Lids",
      "category": "Kitchen Tools",
      "price": 32.50,
      "currency": "USD",
      "stock": 40,
      "description": "Set of 3 mixing bowls with airtight lids, perfect for baking, mixing, and storing."
    },
    {
      "orderNumber": "1052998",
      "userId": "user123",
      "productTitle": "Stoneware Baking Dish",
      "category": "Bakeware",
      "price": 54.00,
      "currency": "USD",
      "stock": 15,
      "description": "Heavy-duty stoneware dish for casseroles, lasagna, and oven-to-table serving."
    },
    {
      "orderNumber": "1053883",
      "userId": "user123",
      "productTitle": "Pampered Chef Chef's Knife",
      "category": "Cutlery",
      "price": 69.95,
      "currency": "USD",
      "stock": 50,
      "description": "Professional chef's knife with ergonomic handle and stainless-steel blade."
    },
    {
      "orderNumber": "1575352186",
      "userId": "user123",
      "productTitle": "Manual Food Processor",
      "category": "Food Prep",
      "price": 64.99,
      "currency": "USD",
      "stock": 18,
      "description": "Chop, mix, and blend ingredients quickly with this manual hand-powered processor."
    },
    {
      "orderNumber": "207629G0002",
      "userId": "user123",
      "productTitle": "Cast Iron Skillet 12-Inch",
      "category": "Cookware",
      "price": 79.00,
      "currency": "USD",
      "stock": 12,
      "description": "Pre-seasoned cast iron skillet for even heat distribution and versatile cooking."
    },
    {
      "orderNumber": "59221960870839",
      "userId": "user123",
      "productTitle": "Garlic Press with Cleaning Tool",
      "category": "Kitchen Tools",
      "price": 24.95,
      "currency": "USD",
      "stock": 60,
      "description": "Effortlessly press garlic cloves with a sturdy design and included cleaning tool."
    }
  ]

app.get('/health', (req, res) => {
    res.send({
        success: true,
        message: 'Server is running'
    })
})


app.get('/api/orders', (req, res) => {
    try {
        const { userId, limit, filter } = req.query;

        // Validate userId is provided
        if (!userId) {
            return res.status(400).json({
                success: false,
                error: 'Bad Request',
                message: 'userId parameter is required'
            });
        }

        // Filter orders by userId
        let userOrders = orderHistory.filter(order => order.userId === userId);

        // Filter by product title if provided
        if (filter) {
            const searchTerm = filter.toLowerCase().trim();
            userOrders = userOrders.filter(order => {
                const productTitle = order.productTitle.toLowerCase();
                // Method 1: Direct substring match (original)
                if (productTitle.includes(searchTerm)) {
                    return true;
                }
                // Method 2: Remove spaces from both and match
                const searchWithoutSpaces = searchTerm.replace(/\s+/g, '');
                const titleWithoutSpaces = productTitle.replace(/\s+/g, '');
                if (titleWithoutSpaces.includes(searchWithoutSpaces)) {
                    return true;
                }

                // Method 3: Split search term and check if all words exist in title
                const searchWords = searchTerm.split(/\s+/);
                const allWordsMatch = searchWords.every(word => 
                    word && productTitle.includes(word)
                );
                if (allWordsMatch) {
                    return true;
                }
                return false;
            });
        }

        // Apply limit if provided
        if (limit) {
            const limitNum = parseInt(limit);
            if (!isNaN(limitNum) && limitNum > 0) {
                userOrders = userOrders.slice(0, limitNum);
            }
        }

        // Return results with metadata
        res.json({
            success: true,
            data: userOrders,
            metadata: {
                userId: userId,
                totalResults: userOrders.length,
                appliedFilters: {
                    productTitle: filter || null,
                    limit: limit ? parseInt(limit) : null
                }
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            message: error.message
        });
    }
})


app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})