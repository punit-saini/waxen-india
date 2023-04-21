import NextAuth from "next-auth";
import Users from "@/models/User";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";



export const authOptions = {
    providers : [
        GoogleProvider({
            clientId : '606415744564-r5k9hq2mfvgsj0lua5kbqo0bm1kgpfj7.apps.googleusercontent.com',
            clientSecret : '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'
        }),
        GithubProvider({
          clientId : '22bbc02ef329e8d3a641',
          clientSecret : '66dab07737958e7c8eecc570e2da39846709102e'
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn(user, account, profile) {
          const session = {
            id: user.user.id,
            name: user.user.name,
            email: user.user.email,
            image : user.user.image,
            
          };
    
          try {
            const conn = await mongoose.connect(process.env.MONGO_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`);
            console.log('inside tryyyy')
            const userExists = await Users.findOne({email : user.user.email});
            console.log('value of user exists is  : ', userExists)
            if (!userExists) {
              await Users.create(session);
              console.log('new user created')
              await mongoose.connection.close();
            }
    
          } catch (error) {
            console.log(error);
          }
    
          return Promise.resolve(session);
        },
      },
}


export default (req, res) => NextAuth(req, res, authOptions);
