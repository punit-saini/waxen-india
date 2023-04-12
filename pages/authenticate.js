// import react, {useState} from 'react'
// import { client } from '@/lib/client';
// import { urlFor } from '@/lib/client';
// import { useStateContext} from '../context/StateContext';
// import { useSession, getSession } from 'next-auth/react';



// export default function(data){
// const session = getSession()
//      console.log(session, 'is session')
//     // if(session.data== null){
//     //     <h1>Not Signed in</h1>
//     // }
//     // else {
//     // UserSaver(session)
//     // }
// }

// async function UserSaver(session){
    
  
//     // create a new user entry
//     const newUser = {
//       name: session.data.name,
//       email: session.data.email,
//     };
    
//     // create the new entry
//     client.create(newUser)
//       .then(result => console.log(result))
//       .catch(err => console.error(err));
    
//   }


// //   export async function getServerSideProps(context) {
// //       const session=await getSession(context);
// //     //   if(session.data != null){
// //     //     return {
// //     //         redirect: {
// //     //           destination: '/',
// //     //           permanent: false
// //     //         }
// //     //       }  
// //     console.log(session+ 'is sessiin hehe') 
// //     // }
// //     return {
// //         data : 'hello'
// //     }
     
// //     }
  
    
  
  
  
  
  
  