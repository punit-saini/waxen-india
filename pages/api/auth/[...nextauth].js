import NextAuth from "next-auth";
import Users from "@/models/User";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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
    secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
    callbacks: {
        async signIn(user, account, profile) {
          const session = {
            id: user.user.id,
            name: user.user.name,
            email: user.user.email,
            image : user.user.image,
            
          };
    
          try {
            console.log('inside tryyyy')
            await client.connect();
            const users = client.db().collection("users");
            const userExists = await users.findOne({ email: user.user.email });
            
            if (!userExists) {
              await Users.create(session);
            }
    
            await client.close();
          } catch (error) {
            console.log(error);
          }
    
          return Promise.resolve(session);
        },
      },
}


export default (req, res) => NextAuth(req, res, authOptions);
