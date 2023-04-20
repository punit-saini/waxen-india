// schemas/pet.js
export default {
    name: 'banner',
    type: 'document',
      title: 'Banner Image',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        validation : Rule => Rule.required()
      },
      {
        name : 'link',
        type : 'string',
        title : "Link"
      }
    ]
  }