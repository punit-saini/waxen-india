// schemas/pet.js
export default {
    name: 'user',
    type: 'document',
      title: 'User',
    fields: [
      {
        name: 'fname',
        type: 'string',
        title: 'FName'
      },
      {
        name : 'mName',
        type : 'string',
        title : 'MName'
      },
      {
        name : 'lname',
        type : 'string',
        title : 'LName'
      },
      {
        name : 'mail',
        type : 'string',
        title : 'Email'
      },
      {
        name : 'hashedPassword',
        type : 'string',
        title : 'HashedPassword'
      },
    ]
  }