import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: String(process.env.GOOGLE_CLIENT_ID),
            clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
        }),
        GithubProvider({
            clientId: String(process.env.GITHUB_ID),
            clientSecret: String(process.env.GITHUB_SECRET),
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            let isAllowedToSignIn = true
            const allowedUser = [
                '8571433'
            ];
            console.log(user);
            if (allowedUser.includes(String(user.id))) {
                isAllowedToSignIn = true;
            }
            else {
                isAllowedToSignIn = false;
            }
            return isAllowedToSignIn
        }
    },
    secret: process.env.AUTH_SECRET,
}

export default NextAuth(authOptions)