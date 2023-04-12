export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "contactNumber",
      title: "Contact Number",
      type: "string"
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        {
          name: "street",
          title: "Street",
          type: "string"
        },
        {
          name: "city",
          title: "City",
          type: "string"
        },
        {
          name: "state",
          title: "State",
          type: "string"
        },
        {
          name: "zipCode",
          title: "Zip Code",
          type: "string"
        }
      ]
    },
    {
      name: "orders",
      title: "Orders",
      type: "array",
      "of": [
        {
          name: "order",
          title: "Order",
          type: "object",
          fields: [
            {
              name: "orderId",
              title: "Order ID",
              type: "string"
            },
            {
              name: "orderDate",
              title: "Order Date",
              type: "datetime"
            },
            {
              name: "orderItems",
              title: "Order Items",
              type: "array",
              "of": [
                {
                  name: "orderItem",
                  title: "Order Item",
                  type: "object",
                  fields: [
                    {
                      name: "itemId",
                      title: "Item ID",
                      type: "string"
                    },
                    {
                      name: "quantity",
                      title: "Quantity",
                      type: "number"
                    }
                  ]
                }
              ]
            },
            {
              name: "orderTotal",
              title: "Order Total",
              type: "number"
            },
            {
              name: "orderStatus",
              title: "Order Status",
              type: "string"
            }
          ]
        }
      ]
    },
    {
      name: "wishlist",
      title: "Wishlist",
      type: "array",
      "of": [
        {
          name: "wishlistItem",
          title: "Wishlist Item",
          type: "object",
          fields: [
            {
              name: "itemId",
              title: "Item ID",
              type: "string"
            },
          ]
        }
      ]
    }
  ]
}
