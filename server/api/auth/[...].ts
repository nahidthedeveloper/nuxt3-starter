import {NuxtAuthHandler} from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from "axios";

export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,

    pages: {
        signIn: '/login/',
        error: '/error',
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
