// schemas/pet.js
export default {
    name: 'product',
    type: 'document',
      title: 'Product',
    fields: [
      {
        name: 'shortName',
        type: 'string',
        title: 'ShortName',
        validation: Rule => Rule.required()
      },
      {
          title: 'Category',
          name: 'category',
          type: 'string',
          options: {
            list: [
              {title: 'Electronics', value: 'electronics'},
              {title: 'Service', value: 'bicycle'},
              {title: 'Fruits-n-Vegetables', value: 'fruits-n-vegetables'},
              {title: 'Drinks-n-Beverages', value: 'drinks-n-beverages'},
              {title: 'Dairy', value: 'dairy'},
              {title: 'Grocery', value: 'grocery'},
            ], 
          },
          validation: Rule => Rule.required()
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'fullName',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 50)
        },
        validation: Rule => Rule.required()

      },
      {
        name : 'fullName',
        type : 'string',
        title : 'FullName',
        validation: Rule => Rule.required()
      },
      {
        name : 'actualPrice',
        type : 'number',
        title : 'ActualPrice',
        validation: Rule => Rule.required()
      },
      {
        name : 'finalPrice',
        type : 'number',
        title : 'FinalPrice',
        validation: Rule => Rule.required()
      },
      {
        name : 'qtyUnit',
        type : 'string',
        title : 'QtyUnit',
        validation: Rule => Rule.required()
      },
      {
        name : 'description',
        type : 'text',
        title : 'Description',
        validation: Rule => Rule.required()
      },
      {
        name : 'stockQuantity',
        type : 'number',
        title : 'StockQuantity',
        validation: Rule => Rule.required()
      },
      {
        name : 'tags',
        type : 'array',
        title : 'Tags',
        of : [{type : 'string'}]
      },
      {
        name: 'image',
        title: 'Image',
        validation: Rule => Rule.required(),
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      }
    ]
  }