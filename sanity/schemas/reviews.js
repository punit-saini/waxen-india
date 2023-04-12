

export default {
    name: 'reviews',
    type: 'document',
      title: 'Reviews',
    fields: [
      {
        name: 'product_id',
        type: 'string',
        title: 'Product ID'
      },
      {
        title: 'Author',
        name: 'author',
        type: 'string'
      },
      {
        title : 'Text',
        name : 'text',
        type : 'string'
      },
      {
        title : 'Rating',
        name : 'rating',
        type : 'number',
        options: {
         list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4},
          {title: '5', value: 5},
         ], 
        },
         validation: Rule => Rule.required()
      },
    ]

}