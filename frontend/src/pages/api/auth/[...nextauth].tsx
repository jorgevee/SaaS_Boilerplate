import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn() {
      return true;
    },
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET as string,
  },
  // A database is optional, but required to persist accounts in a database
};

export default NextAuth(authOptions) as (req: any, res: any) => Promise<void>;
