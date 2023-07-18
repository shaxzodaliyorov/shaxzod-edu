import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import nextAuth from 'next-auth';
import GitGubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { RegisterTypes } from '../../../interfaces/user';
import AUTH from '../../../services/auth.services';
export default (req: NextApiRequest, res: NextApiResponse) => {
	return nextAuth(req, res, {
		providers: [
			GoogleProvider({
				clientId: process.env.NEXT_PUBLIC_GOOGLE_CLINET_ID as string,
				clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
			}),
			GitGubProvider({
				clientId: process.env.NEXT_PUBLIC_GITHUB_CLINET_ID as string,
				clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
			}),
		],
		secret: process.env.NEXT_PUBLIC_SECRET_AUTH,
		callbacks: {
			async signIn({ user }) {
				if (user) {
					const email = user.email as string;
					const firstname = user.name?.split(' ')[0];
					const lastname = user.name?.split(' ')[1];
					const CheckUser = await AUTH.CheckUser(email);
					if (CheckUser === 'user') {
						const data = { email, password: '' };
						const response = await AUTH.LoginUser(data);
						res.setHeader(
							'Set-Cookie',
							cookie.serialize('token', response.token, {
								secure: true,
								path: '/',
							})
						);
						return true;
					} else if (CheckUser === 'no-user') {
						const data: RegisterTypes = {
							lastname,
							firstname,
							email,
							password: '',
							profilepic: user.image as string,
						};
						const response = await AUTH.CreateUser(data);
						res.setHeader(
							'Set-Cookie',
							cookie.serialize('token', response.token, {
								secure: true,
								path: '/',
							})
						);
						return true;
					}
				}
				return false;
			},
		},
	});
};