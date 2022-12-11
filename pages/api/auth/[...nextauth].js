// import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

// import connectMongo from '../../../database/conn';
import db from '../../../database/conn';
// import clientPromise from '../../../lib/mongodb';
import Users from '../../../model/Schema';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export const authOptions = {
  // MongoDB
  // adapter: MongoDBAdapter(clientPromise),
  // Configure JWT
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, res) {
        db().catch((error) => {
          res.json(`ปัญหาเกิดจาก ${error}`);
        });

        // Check user existence
        const result = await Users.findOne({ email: credentials.email });
        console.log('result', result);
        if (!result) {
          throw new Error('No user found with this email, please sign up');
        }

        // compare()
        const checkPassword = await bcrypt.compareSync(
          credentials.password,
          result.password,
        );

        // incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error({ message: "Username or Password doesn't match" });
        }
        return result;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
