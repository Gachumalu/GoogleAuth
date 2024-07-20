import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const authOptions = NextAuth({
  providers: [
    GoogleProvider({
      //   clientId:
      //     "8890893418-nvdi57u46dmg5i9hk5br23qrs02mgpgh.apps.googleusercontent.com" as string,
      //   clientSecret: "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" as string,
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/",
  },
});
export { authOptions as GET, authOptions as POST };
