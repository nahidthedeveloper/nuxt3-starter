import {NuxtAuthHandler} from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import axios from "axios";

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
    secret: runtimeConfig.authSecret,

    pages: {
        signIn: '/login',
        error: '/login',
    },

    providers: [
        CredentialsProvider.default({
            name: 'credentials',
            credentials: {},
            async authorize(credentials: { username: string; password: string }) {
                const payload = {
                    username_or_email: credentials.username,
                    password: credentials.password,
                };
                try {
                    const {data} = await axios.post(`${process.env.SERVER_URL}/auth/login/`, payload);
                    return data;
                } catch (error: any) {
                    if (error.response) {
                        const {data: errors} = error.response;
                        throw new Error(JSON.stringify(errors));
                    }
                    throw new Error('Authorization error');
                }
            },
        }),
        GithubProvider.default({
            clientId: runtimeConfig.public.GITHUB_CLIENT_ID,
            clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider.default({
            clientId: runtimeConfig.public.GOOGLE_CLIENT_ID,
            clientSecret: runtimeConfig.GOOGLE_CLIENT_SECRET
        })
    ],

    session: {
        strategy: 'jwt',
    },

    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token = {
                    ...token,
                    ...user,
                };
            }
            return token;
        },
        async session({session, token}) {
            session.user = {
                ...token,
                ...session.user,
            };
            return session;
        },
    },
});
